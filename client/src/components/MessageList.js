import React from 'react';

const MessageList = ({ messages, currentUser }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`message ${message.sender === currentUser ? 'sent' : 'received'}`}
        >
          <div className="message-content">{message.content}</div>
          <div className="message-time">{new Date(message.timestamp).toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;