import { db } from '@/db';
import { videoSummaries } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function getSummaries(userId: string) {
  try {
    const summaries = await db.query.videoSummaries.findMany({
      where: eq(videoSummaries.userId, userId),
      orderBy: [desc(videoSummaries.createdAt)],
    });
    return summaries;
  } catch (err) {
    console.error('Error fetching summaries', err);
    return [];
  }
}

export async function getSummaryById(id: string) {
  try {
    const summary = await db.query.videoSummaries.findFirst({
      where: eq(videoSummaries.id, id),
    });

    if (!summary) return null;
    
    // Add dynamically calculated word count
    const wordCount = summary.summaryText 
      ? summary.summaryText.split(/\s+/).filter(Boolean).length 
      : 0;

    return { ...summary, wordCount };
  } catch (err) {
    console.error('Error fetching summary by id', err);
    return null;
  }
}
