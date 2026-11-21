
import './About.css';

function About() {
  const growth = [
    { year: '2024', rate: 25 },
    { year: '2025', rate: 60 },
    { year: '2026', rate: 90 }
  ];

  return (
    <div className="about-page">

      <div className="about-content">
        <h1>About FindIt</h1>

        <h2>Your Favourite Online Book Store</h2>

        <p>
          Welcome to FindIt! We believe that books are the
          best way to gain knowledge and explore new ideas.
        </p>

        <p>
          Our mission is to make books easily accessible
          and affordable for everyone.
        </p>

        <h2>Why Choose FindIt?</h2>

        <ul>
          <li>Wide Collection of Books</li>
          <li>Affordable Prices</li>
          <li>Easy Online Shopping</li>
          <li>Simple and Secure Payment Options</li>
        </ul>
      </div>

      <div className="growth-card">
        <h2>Our Growth Rate</h2>
        <p>FindIt's yearly growth journey</p>

        <div className="growth-chart">
          {growth.map((item) => (
            <div className="growth-item" key={item.year}>
              <span className="growth-percent">
                {item.rate}%
              </span>

              <div className="growth-bar-bg">
                <div
                  className="growth-bar"
                  style={{ height: `${item.rate}%` }}
                ></div>
              </div>

              <span className="growth-year">
                {item.year}
              </span>
            </div>
          ))}
        </div>

        <h3>Growing Together With Readers!</h3>
      </div>

    </div>
  );
}

export default About;
