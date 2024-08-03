import React, { useState } from 'react';
import BrandTile from './components/BrandTile';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import './App.css';

const brands = [
  { name: 'Lloyds', logo: 'url_to_lloyds_logo', themeColor: '#4caf50' },
  { name: 'Halifax', logo: 'url_to_halifax_logo', themeColor: '#2196f3' },
  { name: 'BOS', logo: 'url_to_bos_logo', themeColor: '#9c27b0' },
  { name: 'MBNA', logo: 'url_to_mbna_logo', themeColor: '#0d47a1' },
];

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userDetails) => {
    setUser(userDetails);
  };

  const handleLogoff = () => {
    setUser(null);
  };

  const handleBack = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {!user ? (
        <LoginPage onLogin={handleLogin} />
      ) : user.role === 'admin' ? (
        <AdminPanel user={user} onLogoff={handleLogoff} onBack={handleBack} />
      ) : (
        <>
          <header className="App-header">
            <h1>Brand Tiles</h1>
            <button className="logoff-button" onClick={handleLogoff}>Logoff</button>
          </header>
          <main className="brand-tiles-container">
            {brands.map((brand, index) => (
              <BrandTile key={index} brand={brand} themeColor={brand.themeColor} />
            ))}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
