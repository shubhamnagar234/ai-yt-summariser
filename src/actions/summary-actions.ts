'use server';

import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import { videoSummaries } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export async function deleteSummaryAction({
  summaryId,
}: {
  summaryId: string;
}) {
  try {
    const session = await getSession();
    const userId = session?.userId;

    if (!userId) {
      throw new Error('User not found');
    }

    const result = await db
      .delete(videoSummaries)
      .where(
        and(
          eq(videoSummaries.id, summaryId),
          eq(videoSummaries.userId, userId)
        )
      )
      .returning();

    if (result.length > 0) {
      revalidatePath('/dashboard');
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.error('Error deleting summary', error);
    return { success: false };
  }
}
