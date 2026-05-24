import { getDBConnection } from './db';

export async function getSummaries(userId: string) {
  const sql = await getDBConnection();
  // Updated to video_summaries
  const summaries =
    await sql`SELECT * from video_summaries WHERE user_id = ${userId} ORDER BY created_at DESC`;
  return summaries;
}

export async function getSummaryById(id: string) {
  try {
    const sql = await getDBConnection();
    // Updated fields to match your schema (video_url, video_id instead of file_name)
    const [summary] = await sql`SELECT  
    id, 
    user_id, 
    title, 
    video_url,
    video_id,
    summary_text, 
    status,
    created_at, 
    updated_at,  
    LENGTH(summary_text) - LENGTH(REPLACE(summary_text, ' ', '')) + 1 as word_count  
    FROM video_summaries 
    WHERE id = ${id}`;

    return summary;
  } catch (err) {
    console.error('Error fetching summary by id', err);
    return null;
  }
}
