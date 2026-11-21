
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    alert('Login successful!');
    navigate('/');
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Section */}
        <div className="login-left">

          <Link to="/" className="login-logo">
            Find<span>It.</span>
          </Link>

          <div className="login-content">
            <p className="login-tag">WELCOME BACK</p>

            <h1>
              Every book has
              <br />
              a story. Find yours.
            </h1>

            <p className="login-description">
              Sign in to discover amazing books,
              explore new worlds and continue
              your reading journey.
            </p>

            <div className="book-decoration">
              <div className="book book-one">READ</div>
              <div className="book book-two">DREAM</div>
              <div className="book book-three">EXPLORE</div>
            </div>
          </div>

          <p className="login-footer">
            Your next favourite book is waiting.
          </p>

        </div>

        {/* Right Section */}
        <div className="login-right">

          <div className="login-form-wrapper">

            <h2>Welcome Back!</h2>

            <p className="form-subtitle">
              Please enter your details to sign in.
            </p>

            <form onSubmit={handleLogin}>

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="password-heading">
                <label>Password</label>
                <Link to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="login-btn">
                Sign In →
              </button>

            </form>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <p className="signup-text">
              Don't have an account?
              <Link to="/register"> Create Account</Link>
            </p>

            <Link to="/" className="back-home">
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
