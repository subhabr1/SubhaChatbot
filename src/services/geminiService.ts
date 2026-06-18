import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY is not defined in environment variables');
}

const genAI = new GoogleGenerativeAI(API_KEY);

// Using the specified model: gemini-3.1-flash-lite
const MODEL_NAME = 'gemini-3.1-flash-lite';

/**
 * Generates a response from Gemini AI based on the user's question and context
 * @param userQuestion - The question asked by the user
 * @param aboutMeContext - Context from the about-me.md file
 * @returns Promise with the AI-generated response
 */
export async function generateResponse(
  userQuestion: string,
  aboutMeContext: string
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // Create a system prompt that includes the context
    const prompt = `You are a helpful chatbot that answers questions about a person based on the information provided below. 
Only answer questions that can be answered using the context provided. If a question is outside the scope of the provided information, politely let the user know that you don't have that information.
Be friendly, concise, and professional in your responses.

Context about the person:
${aboutMeContext}

User's question: ${userQuestion}

Please provide a helpful and accurate response based only on the context provided above.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Error generating response from Gemini:', error);
    
    if (error instanceof Error) {
      // Handle specific error cases
      if (error.message.includes('API key')) {
        throw new Error('Invalid API key. Please check your Gemini API configuration.');
      }
      throw new Error(`Failed to generate response: ${error.message}`);
    }
    
    throw new Error('An unexpected error occurred while generating the response.');
  }
}

/**
 * Validates that the Gemini API is properly configured
 * @returns Promise<boolean> indicating if the API is accessible
 */
export async function validateApiKey(): Promise<boolean> {
  try {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    await model.generateContent('test');
    return true;
  } catch (error) {
    console.error('API key validation failed:', error);
    return false;
  }
}

// Made with Bob
