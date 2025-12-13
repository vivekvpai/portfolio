import React, { useState, useRef, useEffect } from "react";
import "./FloatingChat.css";
import Groq from "groq-sdk";
// import resumeData from "../data/resume.json";
import resumeUrl from "../data/resume.md";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { getSystemPrompt } from "../data/prompts";

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
      text: "Hi! I'm Vivek V Pai's PAi (Personal AI) . Ask me anything about Vivek's resume.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [resumeContext, setResumeContext] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const islandRef = useRef<HTMLFormElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when loading finishes if chat is open
  useEffect(() => {
    if (!isLoading && isOpen) {
      inputRef.current?.focus();
    }
  }, [isLoading, isOpen]);

  // Load resume context
  useEffect(() => {
    fetch(resumeUrl)
      .then((res) => res.text())
      .then((text) => setResumeContext(text))
      .catch((err) => console.error("Failed to load resume context", err));
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

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node) &&
        islandRef.current &&
        !islandRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
      const apiKey = process.env.REACT_APP_GROQ_API_KEY;

      if (!apiKey) {
        console.error(
          "Groq API Key is missing. Check .env or .env.local file."
        );
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "Error: API Key is missing.",
            sender: "ai",
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
        return;
      }

      const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });

      const systemPrompt = getSystemPrompt(resumeContext);

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: textToSend,
          },
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.6,
        max_tokens: 1024,
      });

      const text =
        completion.choices[0]?.message?.content ||
        "I couldn't generate a response.";

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

  const handleClear = () => {
    setMessages([
      {
        id: "1",
        text: "Hi! I'm Vivek V Pai's PAi (Personal AI) . Ask me anything about Vivek's resume.",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
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
      <form
        className="floating-prompt-island"
        onSubmit={handleFormSubmit}
        ref={islandRef}
      >
        <div className="island-container">
          <input
            ref={inputRef}
            type="text"
            className="island-input"
            placeholder="Ask me anything... (AI can make mistakes)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onClick={() => setIsOpen(true)}
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
        <div className="chat-window" ref={chatWindowRef}>
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
            <h3>Chat with PAi</h3>
            <button
              className="clear-btn"
              onClick={handleClear}
              title="Clear Chat"
            >
              <FaTrash size={14} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.sender === "ai" ? (
                  <>
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                    <div className="ai-disclaimer">
                      Note: AI can make mistakes
                    </div>
                  </>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            {isLoading && (
              <div className="message ai">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
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
