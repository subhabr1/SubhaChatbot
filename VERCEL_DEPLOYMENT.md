# Deploy Your Chatbot to Vercel

Follow these step-by-step instructions to deploy your Gemini AI chatbot to Vercel.

## Prerequisites
- Your code is already pushed to GitHub: https://github.com/subhabr1/SubhaChatbot
- You have your Gemini API key (from your `.env` file)

## Step 1: Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (or **"Log In"** if you have an account)
3. Choose **"Continue with GitHub"** to connect your GitHub account
4. Authorize Vercel to access your GitHub repositories

## Step 2: Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"SubhaChatbot"** in the list
4. Click **"Import"** next to it

## Step 3: Configure Your Project

Vercel will automatically detect that this is a Vite project. You should see:

- **Framework Preset:** Vite
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `dist` (auto-detected)

**Do NOT click Deploy yet!** We need to add environment variables first.

## Step 4: Add Environment Variables (CRITICAL!)

Before deploying, you MUST add your Gemini API key:

1. Scroll down to the **"Environment Variables"** section
2. Click **"Add"** or the input field
3. Enter the following:
   - **Name:** `VITE_GEMINI_API_KEY`
   - **Value:** `[Your Gemini API key from .env file]`
   - **Environment:** Select all three (Production, Preview, Development)
4. Click **"Add"** to save the environment variable

⚠️ **IMPORTANT:** Without this environment variable, your chatbot won't work!

## Step 5: Deploy!

1. After adding the environment variable, click **"Deploy"**
2. Vercel will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy to their global CDN
3. This usually takes 1-3 minutes

## Step 6: Access Your Live Site

Once deployment is complete:

1. You'll see a **"Congratulations!"** screen
2. Your site will be live at a URL like: `https://subha-chatbot-xxxxx.vercel.app`
3. Click **"Visit"** to see your live chatbot!

## Step 7: Custom Domain (Optional)

If you want a custom domain:

1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Updating Your Site

Whenever you push changes to GitHub:

1. Vercel automatically detects the push
2. Rebuilds and redeploys your site
3. Your live site updates in 1-2 minutes

No manual redeployment needed!

## Troubleshooting

### Issue: "API key not found" error
**Solution:** Make sure you added `VITE_GEMINI_API_KEY` in environment variables

### Issue: Build fails
**Solution:** Check the build logs in Vercel dashboard for specific errors

### Issue: Site loads but chatbot doesn't respond
**Solution:** 
1. Open browser console (F12)
2. Check for API errors
3. Verify the API key is correct in Vercel environment variables
4. Make sure the model name `gemini-3.1-flash-lite` is valid

### Issue: Need to update environment variables
**Solution:**
1. Go to Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Edit or add new variables
5. Redeploy from **Deployments** tab

## Quick Deployment Checklist

- [ ] GitHub repository is public or Vercel has access
- [ ] Logged into Vercel with GitHub
- [ ] Imported SubhaChatbot project
- [ ] Added `VITE_GEMINI_API_KEY` environment variable
- [ ] Clicked Deploy
- [ ] Waited for deployment to complete
- [ ] Tested the live site

## Your Deployment URLs

After deployment, you'll get:
- **Production URL:** `https://subha-chatbot.vercel.app` (or similar)
- **Preview URLs:** Generated for each pull request
- **Development URL:** For testing branches

## Security Notes

✅ Your API key is secure:
- Stored in Vercel's encrypted environment variables
- Not visible in your code or GitHub
- Only accessible during build time
- Bundled into the application (client-side)

⚠️ **Note:** Since this is a client-side app, the API key will be visible in the browser's network requests. For production apps with sensitive keys, consider using a backend API proxy.

## Support

- **Vercel Documentation:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **Your Project Dashboard:** https://vercel.com/dashboard

---

**That's it!** Your chatbot should now be live on Vercel! 🚀

Share your live URL with others to showcase your AI-powered chatbot!