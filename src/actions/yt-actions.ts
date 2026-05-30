'use server';

import { generateSummaryFromGemini } from '@/lib/geminiai';
import { fetchYoutubeMetadata } from '@/lib/youtube';
import { generateSummaryFromOpenAI } from '@/lib/openai';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import { videoSummaries } from '@/db/schema';
interface YtSummaryType {
  url: string;
  summary: string;
  title: string;
  videoId: string;
}

export async function generateYTSummary(youtubeUrl: string) {
  if (!youtubeUrl) {
    return {
      success: false,
      message: 'YouTube URL is required',
      data: null,
    };
  }

  try {
    const { transcript, title, videoId } =
      await fetchYoutubeMetadata(youtubeUrl);

    let summary;
    try {
      summary = await generateSummaryFromOpenAI(transcript);
    } catch (error) {
      if (error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
        try {
          summary = await generateSummaryFromGemini(transcript);
        } catch (geminiError) {
          throw new Error(
            'Failed to generate summary with available AI providers',
          );
        }
      } else {
        throw error;
      }
    }

    if (!summary) {
      return {
        success: false,
        message: 'Failed to generate summary',
        data: null,
      };
    }

    return {
      success: true,
      message: 'Summary generated successfully',
      data: {
        title,
        summary,
        videoId,
      },
    };
  } catch (err: any) {
    return {
      success: false,
      message: err instanceof Error ? err.message : 'Video processing failed',
      data: null,
    };
  }
}

async function saveYtSummary({
  userId,
  url,
  summary,
  title,
  videoId,
}: YtSummaryType & { userId: string }) {
  try {
    const [savedSummary] = await db
      .insert(videoSummaries)
      .values({
        userId,
        videoUrl: url,
        videoId,
        summaryText: summary,
        title,
      })
      .returning({
        id: videoSummaries.id,
        summaryText: videoSummaries.summaryText,
      });
    return savedSummary;
  } catch (error) {
    console.error('Error saving video summary', error);
    throw error;
  }
}

export async function storeYtSummaryAction({
  url,
  summary,
  title,
  videoId,
}: YtSummaryType) {
  let savedSummary: any;
  try {
    const session = await getSession();
    if (!session?.userId) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    savedSummary = await saveYtSummary({
      userId: session.userId,
      url,
      summary,
      title,
      videoId,
    });

    if (!savedSummary) {
      return {
        success: false,
        message: 'Failed to save video summary, please try again...',
      };
    }
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : 'Error saving video summary',
    };
  }

  // Revalidate cache to ensure dashboard updates immediately
  revalidatePath(`/summaries/${savedSummary.id}`);

  return {
    success: true,
    message: 'Video summary saved successfully',
    id: savedSummary.id,
  };
}
