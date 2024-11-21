import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    window.location.href = '/auth/login'; 
  };

  return (
    <nav>
      <h1>BLOG</h1>
      <div className="nav-btn">
        <a className="active" href="/">Home</a>
        <a href="#about">About</a>

        {!isAuthenticated ? (
          <>
            <a onClick={() => window.location.href = '/login'} className="auth-btn">Log-in</a>
            <a onClick={() => window.location.href = '/register'} className="auth-btn">Register</a>
          </>
        ) : (
          <>
            <a onClick={() => window.location.href = '/profile'} className="auth-btn">Profile</a>
            <a onClick={handleLogout} className="auth-btn">Logout</a>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;