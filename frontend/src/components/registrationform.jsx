import React, { useState, useEffect } from 'react';


const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [authStatus, setAuthStatus] = useState({
    authenticated: false,
    username: '',
    email: '',
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/auth/status');
        
        let data;
        try {
          data = await response.json();
        } catch (jsonError) {
          console.error("Failed to parse JSON:", jsonError);
          setError("An error occurred. Please try again later.");
          return;
        }
  
        if (response.ok) {
          setAuthStatus({
            authenticated: data.authenticated,
            username: data.username || '',
            email: data.email || '',
          });
          localStorage.setItem('isAuthenticated', 'true');
          
          setTimeout(() => {
            window.location.href = '/';
          }, 100);
        } else {
          setError(data.message || 'Authentication failed.');
        }
      } catch (error) {
        console.error("Network or server error:", error);
        setError("An error occurred. Please try again later.");
      }
    };
  
    checkAuthStatus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const payload = { username, email, password, confirm_password: confirmPassword };

    try {
      const response = await fetch('/auth/sign_up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess('Registration successful! Please login.');
        setUsername(''); setEmail(''); setPassword(''); setConfirmPassword('');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred during registration.');
      }
    } catch (err) {
      console.error('Error during registration:', err);
      setError(`Error: ${err.message || 'Error connecting to the server. Please try again later.'}`);
    }
  };

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>


        <div className="input-box button">
          <input type="submit" value="Register Now" />
        </div>

        <div className="text">
          <h3>Already have an account? <a href="/login">Login now</a></h3>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;