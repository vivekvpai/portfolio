import React, { useState, useRef, useEffect } from "react";
import "./FloatingChat.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import resumeData from "../data/resume.json";
import { FaPaperPlane, FaRobot } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm an AI assistant. Ask me anything about Vivek's resume.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Debug: List available models on mount
  useEffect(() => {
    const checkModels = async () => {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey) return;

      try {
      } catch (e) {
        console.error("Error initializing:", e);
      }
    };
    checkModels();
  }, []);

  // Prevent body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Allow handleSend to accept text directly for the island
  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Clear input
    setIsLoading(true);

    // If opening from island, ensure chat is open
    if (!isOpen) setIsOpen(true);

    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found in environment variables");
      }

      const genAI = new GoogleGenerativeAI(apiKey);

      // System prompt configuration
      const systemPrompt = `
        You are the AI Assistant for Vivek V Pai's portfolio. You are professional, friendly, and concise, but you also have a "Creative Mode."

        YOUR GOAL:
        Promote Vivek as the best candidate for the job by answering questions about his resume.

        --- BEHAVIOR GUIDELINES ---
        1. **Facts First:** Always base your answers on the "Resume Context" below. Do not invent professional experiences.
        2. **Be Creative & Witty:** - If asked for a "one-line summary" or "punchline," be bold and marketing-focused.
          - Example: "Vivek doesn't just write code; he engineers scalable solutions."
          - If asked "Describe him in one word," choose powerful words like "Innovator," "Architect," or "Problem-Solver."
        3. **Tone:** Professional but approachable. Use Markdown (bolding, lists) to make answers easy to read.
        4. **Handling Unknowns with Style:** - If asked about a skill not in the resume (like "Can he cook?"), answer playfully but bring it back to tech.
          - Example: "I don't see 'Culinary Arts' in his tech stack, but he can certainly cook up a mean Python script!"
        5. **Conciseness:** Keep answers short and impactful unless asked for details.

        --- RESUME CONTEXT ---
        ${JSON.stringify(resumeData)}
        --- END CONTEXT ---
        
        USER QUESTION: ${textToSend}
        
      `;

      let text = "";

      try {
        // Try Gemini 1.5 Flash first
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
        });
        const result = await model.generateContent(systemPrompt);
        const response = await result.response;
        text = response.text();
      } catch (flashError: any) {
        console.warn("gemini-2.5-flash failed:", flashError.message);

        // Fallback to Gemini Pro
        const model = genAI.getGenerativeModel({
          model: "gemini-2.5-flash-lite",
        });
        const result = await model.generateContent(systemPrompt);
        const response = await result.response;
        text = response.text();
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: text,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error("Error details:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Error: ${
          error.message ||
          "Something went wrong. Please check your API key and permissions."
        }`,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // handleKeyPress removed as it is no longer used. Form submission handles Enter key.

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleSend();
    }
  };

  return (
    <>
      <form className="floating-prompt-island" onSubmit={handleFormSubmit}>
        <div className="island-container">
          <input
            type="text"
            className="island-input"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="island-submit-btn"
            disabled={isLoading || !input.trim()}
          >
            <FaPaperPlane size={18} />
          </button>
        </div>
      </form>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="window-controls">
              <button
                className="control-btn close"
                onClick={() => setIsOpen(false)}
                title="Close"
              />
              <button className="control-btn minimize" />
              <button className="control-btn maximize" />
            </div>
            <h3>Chat with AI</h3>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.sender === "ai" ? (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            {isLoading && (
              <div className="message ai">
                <FaRobot className="animate-bounce" /> Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Input moved to persistent island outside */}
        </div>
      )}
    </>
  );
};

export default FloatingChat;
