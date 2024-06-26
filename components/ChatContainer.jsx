"use client";

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
});

export default function ChatContainer() {
  const [selectedAssistant, setSelectedAssistant] = useState(0);
  
  return (
    <>
      <div>
        <h1 className="title">OpenAI Chat</h1>
        <div className="assistant-container">
          <h3 className="title assistant" style={selectedAssistant == 0 ? { color: 'blue' } : null} onClick={() => setSelectedAssistant(0)}>Blue Pill</h3>
          <h3 className="title assistant" style={selectedAssistant == 1 ? { color: 'red' } : null} onClick={() => setSelectedAssistant(1)}>Red Pill</h3>
        </div>
      </div>
      <Chat />
    </>
  );
}
