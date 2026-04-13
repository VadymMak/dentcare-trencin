'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { CHAT_CONFIG } from '@/lib/constants';
import type { ChatMessage } from '@/lib/types';

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

function botMessage(text: string): ChatMessage {
  return { id: generateId(), text, sender: 'bot', timestamp: new Date() };
}

function userMessage(text: string): ChatMessage {
  return { id: generateId(), text, sender: 'user', timestamp: new Date() };
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [quickRepliesVisible, setQuickRepliesVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Send greeting on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([botMessage(CHAT_CONFIG.greeting)]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, userMessage(text)]);
    setInputValue('');
    setQuickRepliesVisible(false);

    // Bot response with small delay
    setTimeout(() => {
      const reply = CHAT_CONFIG.quickReplies.find((qr) => qr.label === text);
      const responseText = reply ? reply.response : CHAT_CONFIG.fallbackResponse;
      setMessages((prev) => [...prev, botMessage(responseText)]);
    }, 600);
  };

  const handleQuickReply = (label: string) => {
    sendMessage(label);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage(inputValue);
  };

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div className="chat-window" role="dialog" aria-label="DentCare chat asistent">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-header-avatar" aria-hidden="true">🦷</div>
              <div>
                <div className="chat-header-title">DentCare Asistent</div>
                <div className="chat-header-status">
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#4ade80',
                      display: 'inline-block',
                    }}
                  />
                  Online
                </div>
              </div>
            </div>
            <button
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Zavrieť chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages" role="log" aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {/* Quick replies — shown once after greeting */}
            {quickRepliesVisible && messages.length === 1 && (
              <div className="chat-quick-replies">
                {CHAT_CONFIG.quickReplies.map((qr) => (
                  <button
                    key={qr.id}
                    className="chat-quick-btn"
                    onClick={() => handleQuickReply(qr.label)}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Napíšte správu..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Správa"
            />
            <button
              className="chat-send-btn"
              onClick={() => sendMessage(inputValue)}
              aria-label="Odoslať"
              disabled={!inputValue.trim()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        className="chat-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Zavrieť chat' : 'Otvoriť chat'}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="10" r="1" fill="white" />
            <circle cx="12" cy="10" r="1" fill="white" />
            <circle cx="15" cy="10" r="1" fill="white" />
          </svg>
        )}
      </button>
    </>
  );
}
