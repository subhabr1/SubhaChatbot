import { useState, useEffect } from 'react';
import userImage from '../assets/35806dbfd359bda5a4a4d13229cabe4a3b174207.png';
import sendIcon from '../assets/send-icon.svg';
import { generateResponse } from '../services/geminiService';
import { getAboutMeContent } from '../utils/aboutMeLoader';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi, I am <Name>, you can ask questions about me and I will answer as per my knowledge. Do not ask personal questions please :)\nIf your questions are out of my scope, I will let you know.\nI am running on Gemini model.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aboutMeContext, setAboutMeContext] = useState('');

  // Load the about-me content when component mounts
  useEffect(() => {
    try {
      const content = getAboutMeContent();
      setAboutMeContext(content);
    } catch (error) {
      console.error('Error loading about-me content:', error);
      setAboutMeContext('Unable to load personal information.');
    }
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userQuestion = inputValue.trim();
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userQuestion,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Generate response using Gemini API
      const aiResponse = await generateResponse(userQuestion, aboutMeContext);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: error instanceof Error
          ? `Sorry, I encountered an error: ${error.message}`
          : 'Sorry, I encountered an error while processing your question. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-[var(--surface-page)] relative size-full min-h-screen" data-node-id="6:32" data-name="Chatbot">
      <div className="flex h-full" data-node-id="6:1183" data-name="Body">
        {/* Sidebar */}
        <div className="flex flex-col h-full items-start p-6 w-[222px] bg-white border-r border-gray-200" data-node-id="6:1163" data-name="Sidebar">
          <div className="flex flex-col items-start" data-node-id="6:1162" data-name="User Info">
            <div className="relative rounded-[var(--radius-sm)] size-12" data-node-id="6:1161" data-name="User Image">
              <img 
                alt="User profile" 
                className="absolute inset-0 max-w-none object-cover rounded-[var(--radius-sm)] size-full" 
                src={userImage} 
              />
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex flex-1 flex-col gap-8 h-full px-10 py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" data-node-id="6:1164" data-name="Main Area">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto space-y-8 pb-24">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} w-full`}
              >
                {message.sender === 'bot' ? (
                  <div className="flex flex-col items-start max-w-[800px] px-2 py-4">
                    <p className="font-normal leading-6 text-[var(--text-primary)] text-base whitespace-pre-line">
                      {message.text}
                    </p>
                  </div>
                ) : (
                  <div className="bg-[var(--surface-card)] flex flex-col items-start max-w-[608px] px-4 py-4 rounded-[var(--radius-lg)]">
                    <p className="font-normal leading-6 text-[var(--text-primary)] text-base">
                      {message.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="absolute bg-[var(--surface-input)] border border-[var(--border-default)] flex items-center justify-between left-10 bottom-20 max-w-[792px] pl-6 pr-3 py-3 rounded-[var(--radius-full)]" data-node-id="6:1211" data-name="Send message">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Got anything you want to know about me?"
              className="flex-1 bg-transparent outline-none font-normal leading-6 text-[var(--color-secondary)] text-base placeholder:text-[var(--color-secondary)] mr-3"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="h-[50px] w-[53px] flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              data-node-id="6:1213"
              data-name="send-horizontal"
            >
              <img alt="Send" className="w-full h-full" src={sendIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
