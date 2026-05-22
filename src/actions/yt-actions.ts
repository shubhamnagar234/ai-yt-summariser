'use server';

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
    // TODO
    // 1. Fetch transcript using youtube-transcript package
    // 2. Fetch metadata using YouTube oEmbed API
    // 3. Summarize using LangChain

    // Placeholder for the LangChain output
    let summary = 'Extracted summary will go here.';
    let videoTitle = 'YouTube Video Title';
    let extractedVideoId = 'video_id_here';

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
        title: videoTitle,
        summary: summary,
        videoId: extractedVideoId,
      },
    };
  } catch (err) {
    return {
      success: false,
      message: 'Video processing failed',
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
  // TODO
  // Database insertion logic using @neondatabase/serverless
  // Return the inserted ID to redirect the user
  return { id: 'mock-id-123' };
}
