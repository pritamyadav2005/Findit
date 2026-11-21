
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="register-page">

      <div className="register-container">

        {/* Left Section */}
        <div className="register-left">

          <Link to="/" className="register-logo">
            Find<span>It.</span>
          </Link>

          <div className="register-content">

            <p className="register-tag">JOIN OUR COMMUNITY</p>

            <h1>
              Discover Books.
              <br />
              Create Stories.
            </h1>

            <p>
              Create your account and explore a world
              of knowledge, imagination and inspiration.
            </p>

            <div className="register-books">
              <div className="register-book book-a">CREATE</div>
              <div className="register-book book-b">IMAGINE</div>
              <div className="register-book book-c">DISCOVER</div>
            </div>

          </div>

          <p className="register-footer">
            Start your reading journey with FindIt.
          </p>

        </div>

        {/* Right Section */}
        <div className="register-right">

          <div className="register-form-wrapper">

            <h2>Create Account</h2>

            <p className="register-subtitle">
              Join FindIt and discover your next favourite book.
            </p>

            <form onSubmit={handleRegister}>

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button type="submit" className="register-btn">
                Create Account →
              </button>

            </form>

            <p className="register-login-text">
              Already have an account?
              <Link to="/login"> Sign In</Link>
            </p>

            <Link to="/" className="register-home">
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;
