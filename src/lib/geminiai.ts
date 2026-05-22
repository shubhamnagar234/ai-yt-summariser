import { GoogleGenAI } from '@google/genai';
import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';

// Initialize the new Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const generateSummaryFromGemini = async (transcript: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: `Transform this video transcript into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${transcript}`,
      config: {
        // The new SDK has native support for System Prompts via config
        systemInstruction: SUMMARY_SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
    });

    if (!response.text) {
      throw new Error('Empty response from Gemini API');
    }

    return response.text;
  } catch (error: unknown) {
    // Cast the error to an object to check the status safely
    const apiError = error as { status?: number };
    if (apiError?.status === 429) {
      throw new Error('RATE_LIMIT_EXCEEDED');
    }
    console.error('Gemini API Error:', error);
    throw error;
  }
};
