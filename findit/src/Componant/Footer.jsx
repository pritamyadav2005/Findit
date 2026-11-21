
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            Find<span>It</span>
          </div>

          <p>
            Your one-stop destination for quality
            <br />
            products at the best prices.
          </p>

          <div className="footer-specials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        {/* Shop Section */}
        <div className="footer-column">
          <h3>Shop</h3>
          <Link to="/product">All Products</Link>
          <Link to="/product">Categories</Link>
          <Link to="/product">New Arrivals</Link>
          <Link to="/product">Best Sellers</Link>
          <Link to="/product">Deals of the Day</Link>
        </div>

        <div className="footer-column">
          <h3>Customer-service</h3>
          <a href="/about">About Us</a>
          <a href="/#">About Us</a>
          <a href="/#">careers</a>
          <a href="/#">Privacy Policy</a>
          <a href="/#">terms and Conditions</a>
         
        </div>



        <div className="footer-payments">
          <h3>we accept</h3>
          <div className="payment-methods">
            <span className="payment"><img src="/image/visa.png" alt="" /></span>
            <span className="payment"><img src="/image/mastercard.png" alt="" /></span>
            <span className="payment"><img src="/image/upi.png" alt="" /></span>
            <span className="payment"><img src="/image/paytm.png" alt="" /></span>
          </div>

          <div className="secure-payment">
            <span className="lock-icon"><img src="/image/footer-secure.png" alt="" /></span>
            <span>100% secure payments</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
