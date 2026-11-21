
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        <span className="logo-icon">F</span>
        <span>FindIt</span>
      </Link>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
        />
        <button type="button">⌕</button>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
         <NavLink to="/about">About Us</NavLink>
      </div>

      {/* Buttons */}
      <div className="nav-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Sign Up
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
