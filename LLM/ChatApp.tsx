import React, { useState } from 'react';
import axios from 'axios';

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = async () => {
    const response = await axios.post('https://api.groq.com/query', { query: input });
    setMessages([...messages, `User: ${input}`, `Bot: ${response.data.answer}`]);
    setInput('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => <div key={index}>{msg}</div>)}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatApp;
