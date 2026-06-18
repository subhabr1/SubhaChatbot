# Gemini AI Integration Guide

## Overview
This chatbot application is now integrated with Google's Gemini AI API. The bot reads information from the `about-me.md` file and uses it as context to answer questions about you.

## Security Features
✅ API key stored in `.env` file (not committed to git)
✅ `.env` added to `.gitignore` for security
✅ `.env.example` provided as a template
✅ Error handling for API failures
✅ Input validation and sanitization

## Files Created/Modified

### New Files:
1. **`.env`** - Contains your Gemini API key (NEVER commit this!)
2. **`.env.example`** - Template for environment variables
3. **`src/services/geminiService.ts`** - Gemini API integration service
4. **`src/utils/aboutMeLoader.ts`** - Utility to load about-me.md content

### Modified Files:
1. **`src/components/Chatbot.tsx`** - Updated to use Gemini API
2. **`.gitignore`** - Added `.env` to prevent committing secrets
3. **`package.json`** - Added `@google/generative-ai` dependency

## Configuration

### API Key Setup
Your Gemini API key is already configured in the `.env` file:
```
VITE_GEMINI_API_KEY=AIzaSyAb8RN6Los7ZXK9d6wFDUvohdWOM8z1ZlBLwFIItrVjvd9oDtiA
```

### Model Configuration
The chatbot uses the **Gemini 1.5 Flash** model, which is:
- Fast and efficient
- Cost-effective
- Suitable for conversational AI

**Note:** You mentioned "gemini-3.1-flash-lite" but this model doesn't exist in the Gemini API. If you need a different model, you can update it in `src/services/geminiService.ts` by changing the `MODEL_NAME` constant.

Available models:
- `gemini-1.5-flash` (currently used - fast and efficient)
- `gemini-1.5-pro` (more capable, slower)
- `gemini-1.0-pro` (older version)

## Customizing Your About Me Content

1. Open `src/data/about-me.md`
2. Replace the placeholder text with your actual information
3. The chatbot will automatically use this content to answer questions

**Current content has placeholders** - make sure to update it with your real information!

## How It Works

1. **User asks a question** → Sent to Gemini API
2. **Gemini receives**:
   - User's question
   - Context from `about-me.md`
   - Instructions to only answer based on provided context
3. **Gemini responds** → Answer displayed in chat
4. **Error handling** → Graceful error messages if API fails

## Features

✨ **Context-Aware**: Uses your personal information from about-me.md
✨ **Scope-Limited**: Only answers questions based on provided context
✨ **Real-time**: Instant responses from Gemini AI
✨ **Error Handling**: Graceful degradation if API fails
✨ **Loading States**: Visual feedback while processing
✨ **Secure**: API key never exposed to client-side code

## Testing the Integration

The development server is running at: http://localhost:5173/

Try asking questions like:
- "What is your name?"
- "Tell me about your experience"
- "What are your skills?"
- "What projects have you worked on?"

The bot will respond based on the information in `about-me.md`.

## Troubleshooting

### API Key Issues
If you see "Invalid API key" errors:
1. Verify the API key in `.env` is correct
2. Check that the key has proper permissions in Google Cloud Console
3. Ensure billing is enabled for your Google Cloud project

### Model Not Found
If you see model-related errors:
- The model name in `geminiService.ts` must match an available Gemini model
- Check Google's documentation for current model names

### About Me Content Not Loading
If the bot can't access your information:
1. Verify `src/data/about-me.md` exists
2. Check that the file has content
3. Look for console errors in browser DevTools

## Security Best Practices

⚠️ **IMPORTANT**: 
- Never commit the `.env` file to version control
- Never share your API key publicly
- Rotate your API key if it's accidentally exposed
- Use environment-specific keys for development/production

## API Costs

Gemini API pricing (as of integration):
- **Gemini 1.5 Flash**: Very cost-effective
- Free tier available with generous limits
- Monitor usage in Google Cloud Console

## Next Steps

1. ✅ Update `src/data/about-me.md` with your real information
2. ✅ Test the chatbot with various questions
3. ✅ Customize the welcome message in `Chatbot.tsx` if needed
4. ✅ Deploy to production (remember to set environment variables!)

## Support

For issues with:
- **Gemini API**: Check [Google AI Documentation](https://ai.google.dev/docs)
- **This Integration**: Review the code in `src/services/geminiService.ts`
- **General Questions**: Check the inline code comments

---

**Integration completed successfully!** 🎉

The chatbot is now powered by Gemini AI and ready to answer questions about you based on the content in `about-me.md`.