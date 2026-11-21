
import { useState } from 'react';
import './Contact.css';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Thank you! Your message has been received Our Team Contact You Shortly.');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">

      {/* Contact Banner */}
      <section className="contact-banner">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have questions about books or your orders?
            Feel free to contact our team.
          </p>

          <div className="contact-detail">
            <span>✉</span>
            <div>
              <h3>Email</h3>
              <p>support@findit.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>☏</span>
            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📌</span>
            <div>
              <h3>Address</h3>
              <p>Dahisar,Mumbai, Maharashtra, India</p>
            </div>
          </div>

        </div>
       

        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send Us A Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;
