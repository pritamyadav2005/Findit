
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Payment.css';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const book = location.state?.book;
  const [method, setMethod] = useState('');

  if (!book) {
    return (
      <div className="payment-page">
        <h2>No book selected!</h2>
        <button onClick={() => navigate('/products')}>
          Browse Books
        </button>
      </div>
    );
  }

  const handlePayment = () => {
    if (!method) {
      alert('Please select a payment method!');
      return;
    }

    if (method === 'COD') {
      alert('Cash on Delivery selected!');
    } else if (method === 'UPI') {
      alert('Please scan the QR Code to continue with UPI payment.');
    } else {
      alert(method + ' selected! Payment gateway integration required.');
    }
  };

  const upiLink = `upi://pay?pa=py4226292-2@okaxis&pn=FindIt&am=${book.price}&cu=INR`;

  return (
    <div className="payment-page">
      <div className="payment-container">

        <div className="payment-left">
          <h2>Choose Payment Method</h2>
          <p>Select how you want to pay.</p>

          {[
            { name: 'UPI', desc: 'Google Pay, PhonePe' },
            { name: 'Card', desc: 'Debit / Credit Card' },
            { name: 'Net Banking',  desc: 'Pay through your bank' },
            { name: 'COD',  desc: 'Cash on Delivery' }
          ].map((item) => (
            <div
              className={`payment-option ${
                method === item.name ? 'active' : ''
              }`}
              key={item.name}
              onClick={() => setMethod(item.name)}
            >
              <span className="payment-icon">{item.icon}</span>

              <div>
                <h4>{item.name}</h4>
                <small>{item.desc}</small>
              </div>

              <input
                type="radio"
                name="payment"
                checked={method === item.name}
                onChange={() => setMethod(item.name)}
              />
            </div>
          ))}

          {/* UPI QR Code */}
          {method === 'UPI' && (
            <div className="qr-section">
              <h3>Scan QR Code to Pay</h3>

              <QRCodeSVG
                value={upiLink}
                size={200}
                level="H"
              />

              <p>Scan using Google Pay, PhonePe or Paytm</p>
              <h3>Amount: ₹{book.price}</h3>
            </div>
          )}

          <button className="pay-btn" onClick={handlePayment}>
            Continue to Payment →
          </button>
        </div>

        <div className="payment-right">
          <h2>Order Summary</h2>

          <div className="order-book">
            <img src={book.image} alt={book.title} />

            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <h3>₹{book.price}</h3>
            </div>
          </div>

          <div className="price-row">
            <span>Book Price</span>
            <span>₹{book.price}</span>
          </div>

          <div className="price-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="total-row">
            <span>Total Amount</span>
            <span>₹{book.price}</span>
          </div>

          <p className="secure-text">
            🔒 Secure checkout with FindIt
          </p>
        </div>

      </div>
    </div>
  );
}

export default Payment;
