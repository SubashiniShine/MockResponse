import React, { useState } from 'react';
import './LoginPage.css';

const AdminCredentials = {
  'admin1': { password: 'adminpass1', authCode: '12345' },
  'admin2': { password: 'adminpass2', authCode: '67890' }
};

const LoginPage = ({ onLogin }) => {
  const [role, setRole] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authCode, setAuthCode] = useState('');

  const handleLogin = () => {
    if (role === 'admin') {
      if (AdminCredentials[username]?.password === password && AdminCredentials[username]?.authCode === authCode) {
        onLogin({ role: 'admin', username });
      } else {
        alert('Invalid admin credentials');
      }
    } else {
      // User login logic
      onLogin({ role: 'user', username });
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="role-selection">
        <button onClick={() => setRole('user')}>User</button>
        <button onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {role === 'admin' && (
          <input
            type="text"
            placeholder="Authentication Code"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}
          />
        )}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
