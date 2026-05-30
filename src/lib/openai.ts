import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';
import OpenAI from 'openai';

// Only instantiate if key exists — avoids crash at module load when key is missing
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function generateSummaryFromOpenAI(transcript: string) {
  if (!openai) {
    throw new Error('RATE_LIMIT_EXCEEDED'); // triggers Gemini fallback in yt-actions.ts
  }
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SUMMARY_SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Transform this video transcript into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${transcript}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });
    return completion.choices[0].message.content;
  } catch (error: any) {
    if (error?.status === 429) {
      throw new Error('RATE_LIMIT_EXCEEDED');
    }
    throw error;
  }
}
