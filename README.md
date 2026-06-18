# Personal Chatbot Application

A modern, AI-powered chatbot built with React, TypeScript, and Tailwind CSS that answers questions about you based on your personal information.

## 🎨 Design

The UI is implemented based on Figma design specifications with:
- Clean, modern interface
- Sidebar with user profile
- Chat interface with message bubbles
- Responsive design
- Custom color scheme from Figma variables

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool and dev server

## 📁 Project Structure

```
chatbot-app/
├── src/
│   ├── components/
│   │   └── Chatbot.tsx          # Main chatbot component
│   ├── data/
│   │   └── about-me.md          # Your personal information (to be filled)
│   ├── assets/                  # Images and icons
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles with Figma variables
├── public/                      # Static assets
└── package.json
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd chatbot-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## 📝 Customization

### 1. Add Your Personal Information

Edit `src/data/about-me.md` with your information:
- Personal details
- Professional background
- Education
- Projects
- Interests
- Contact information

### 2. Update Profile Image

Replace the user profile image in `src/assets/` with your own photo.

### 3. Customize the Welcome Message

Edit the initial bot message in `src/components/Chatbot.tsx` (line 16) to personalize the greeting.

## 🤖 Next Steps: AI Integration

To make the chatbot functional with AI responses, you'll need to:

### Option 1: Google Gemini API (Recommended)
1. Get a Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Install the Gemini SDK:
   ```bash
   npm install @google/generative-ai
   ```
3. Create a service to:
   - Load the `about-me.md` file
   - Send user questions + your info to Gemini
   - Return AI-generated responses

### Option 2: OpenAI API
1. Get an API key from [OpenAI](https://platform.openai.com/)
2. Install the OpenAI SDK:
   ```bash
   npm install openai
   ```
3. Implement similar integration as above

### Option 3: Local LLM
Use a local model like Ollama for privacy:
```bash
npm install ollama
```

### Implementation Steps:
1. Create `src/services/aiService.ts`
2. Load and parse `about-me.md`
3. Create a system prompt with your information
4. Replace the mock response in `Chatbot.tsx` (line 38-44) with actual AI calls
5. Add error handling and loading states

## 🎨 Design Variables

The app uses CSS variables from Figma:
- `--surface-page`: Page background (#ffffff)
- `--surface-card`: User message background (#fed7aa)
- `--text-primary`: Primary text color (#0f172a)
- `--color-secondary`: Secondary text (#475569)
- `--border-default`: Border color (#e2e8f0)
- `--radius-sm`: Small radius (4px)
- `--radius-lg`: Large radius (12px)
- `--radius-full`: Full radius (9999px)

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🚀 Deployment

Deploy to platforms like:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to customize and extend this chatbot for your needs!

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
