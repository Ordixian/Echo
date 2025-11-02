import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";

function App() {
  const [page, setPage] = useState('auth');
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser({
      name: email.split('@')[0],
      email: email,
      avatar: email[0].toUpperCase(),
      nodeId: 'NODE-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      lastLogin: new Date().toLocaleString()
    });
    setPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('auth');
  };

  if (page === 'auth') {
    return <AuthPage onLogin={handleLogin} />;
  }

  if (page === 'profile') {
    return <ProfilePage user={user} onBack={() => setPage('dashboard')} onLogout={handleLogout} />;
  }

  return <Dashboard user={user} onProfileClick={() => setPage('profile')} />;
}

export default App;
