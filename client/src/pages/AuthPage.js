import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuthSubmit = async (formData) => {
    try {
      // Mock login - replace with actual API call
      login({
        id: 'user1',
        username: formData.username || formData.email.split('@')[0],
        email: formData.email
      });
      navigate('/chat');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="auth-page">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <AuthForm isLogin={isLogin} onSubmit={handleAuthSubmit} />
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default AuthPage;