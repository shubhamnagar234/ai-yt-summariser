import { YoutubeTranscript } from 'youtube-transcript';

export async function fetchYoutubeMetadata(url: string) {
  // Extract Video ID from various YouTube URL formats
  const videoIdRegex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(videoIdRegex);
  const videoId = match ? match[1] : null;

  if (!videoId) {
    throw new Error('Invalid YouTube URL');
  }

  try {
    // Fetch Transcript
    const transcriptResponse = await YoutubeTranscript.fetchTranscript(videoId);
    const transcript = transcriptResponse.map((item) => item.text).join(' ');

    // Fetch Title via free oEmbed API (No API Key needed)
    const oembedResponse = await fetch(
      `https://www.youtube.com/oembed?url=${url}&format=json`,
    );
    const oembedData = await oembedResponse.json();
    const title = oembedData.title || 'YouTube Video';

    return { transcript, title, videoId };
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    throw new Error(
      'Could not fetch transcript. The video might not have captions enabled.',
    );
  }
}
