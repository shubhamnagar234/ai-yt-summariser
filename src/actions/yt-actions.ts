'use server';

import { generateSummaryFromGemini } from '@/lib/geminiai';
import { fetchYoutubeMetadata } from '@/lib/youtube';
import { generateSummaryFromOpenAI } from '@/lib/openai';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

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
    console.log(`Fetched transcript for: ${title}`);

    let summary;
    try {
      summary = await generateSummaryFromOpenAI(transcript);
      console.log('Summary generated via OpenAI');
    } catch (error) {
      console.log('OpenAI Error:', error);

      // Fallback to Gemini if OpenAI rate limit is hit
      if (error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
        try {
          summary = await generateSummaryFromGemini(transcript);
          console.log('Summary generated via Gemini');
        } catch (geminiError) {
          console.error(
            'Gemini API failed after OPENAI quota exceeded',
            geminiError,
          );
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

export async function storeYtSummaryAction({
  url,
  summary,
  title,
  videoId,
}: YtSummaryType) {
  let savedSummary: any = { id: 'mock-id-123' }; // Placeholder until DB logic is added

  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    // FUTURE: Database insertion logic goes here
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : 'Error saving video summary',
    };
  }

  // Revalidation for cache
  revalidatePath(`/summaries/${savedSummary.id}`);

  return {
    success: true,
    message: 'Video summary saved successfully',
    id: savedSummary.id,
  };
}
