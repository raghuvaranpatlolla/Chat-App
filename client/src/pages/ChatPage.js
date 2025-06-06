import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import UserList from '../components/UserList';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  const handleSendMessage = (message) => {
    const newMessage = {
      content: message,
      sender: user.id, // Use the authenticated user's ID
      timestamp: new Date()
    };
    setMessages([...messages, newMessage]);
    // TODO: Send message to server via Socket.io
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <UserList />
        <div className="chat-area">
          <MessageList messages={messages} currentUser={user.id} />
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;