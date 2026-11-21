
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      image: '/image/products/atomic.png',
      cover: 'cover-one',
      category: 'Self Development'
    },
    {
      id: 2,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      price: 299,
      oldPrice: 450,
      image: '/image/products/2_The_Psychology_of_Money.png',
      cover: 'cover-two',
      category: 'Finance'
    },
    {
      id: 3,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      price: 349,
      oldPrice: 499,
      image: '/image/products/3_Rich_Dad_Poor_Dad.png',
      cover: 'cover-three',
      category: 'Business'
    },
    {
      id: 4,
      title: 'Ikigai',
      author: 'Hector Garcia',
      price: 279,
      oldPrice: 399,
      image: '/image/products/4_Ikigai.png',
      cover: 'cover-four',
      category: 'Lifestyle'
    },
    {
      id: 5,
      title: 'The Power of Habit',
      author: 'Charles Duhigg',
      price: 329,
      oldPrice: 499,
      image: '/image/products/5_The_Power_of_Habit.png',
      cover: 'cover-five',
      category: 'Self Development'
    },
    {
      id: 6,
      title: 'Think Like a Monk',
      author: 'Jay Shetty',
      price: 299,
      oldPrice: 450,
      image: '/image/products/6_Think_Like_a_Monk.png',
      cover: 'cover-five',
      category: 'Lifestyle'
    },
    {
      id: 7,
      title: 'Deep Work',
      author: 'Cal Newport',
      price: 279,
      oldPrice: 499,
      image: '/image/products/7_Deep_Work.png',
      cover: 'cover-five',
      category: 'Productivity'
    },
    {
      id: 8,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: 249,
      oldPrice: 399,
      image: '/image/products/8_The_Alchemist.png',
      cover: 'cover-five',
      category: 'Fiction'
    },
      {
      id: 9,
      title: 'Push Ki Rat',
      author: 'Munshi Premchand',
      price: 349,
      oldPrice: 599,
      image: '/image/products/push_ki_rat.png',
      cover: 'cover-one',
      category: 'Self Development'
    },
      {
      id: 10,
      title: 'Science of Self Development',
      author: 'James Clear',
      price: 249,
      oldPrice: 499,
      image: '/image/products/science-book-1.jpg',
      cover: 'cover-one',
      category: 'History'
    },
     {
      id: 11,
      title: 'India After Gandhi',
      author: 'Ramchandra Guha',
      price: 289,
      oldPrice: 499,
      image: '/image/products/history-book-1.jpg',
      cover: 'cover-one',
      category: 'History'
    },
    {
      id: 12,
      title: 'The Discovery of India',
      author: 'Jawaharlal Nehru',
      price: 299,
      oldPrice: 599,
      image: '/image/products/history-book-2.jpg',
      cover: 'cover-one',
      category: 'History'
    },
     {
      id: 13,
      title: 'Godan',
      author: 'Munshi Premchandra',
      price: 297,
      oldPrice: 449,
      image: '/image/products/01_Godaan_Munshi_Premchand.jpg',
      cover: 'cover-one',
      category: 'History'
    },
    {
      id: 14,
      title: 'Namak Ka Daroga',
      author: 'Munshi Premchandra',
      price: 199,
      oldPrice: 449,
      image: '/image/products/05_Namak_Ka_Daroga_Munshi_Premchand.jpg',
      cover: 'cover-one',
      category: 'History'
    },
    {
      id: 15,
      title: 'Eidgah',
      author: 'Munshi Premchandra',
      price: 233,
      oldPrice: 499,
      image: '/image/products/04_Eidgah_Munshi_Premchand.jpg',
      cover: 'cover-one',
      category: 'History'
    },
    {
      id: 16,
      title: 'Kafan',
      author: 'Munshi Premchandra',
      price: 199,
      oldPrice: 440,
      image: '/image/products/02_Kafan_Munshi_Premchand.jpg',
      cover: 'cover-one',
      category: 'History'
    },
  ];

  // Buy Now Function
  const handleBuyNow = (book) => {
    navigate('/payment', {
      state: {
        book: book
      }
    });
  };

  return (
    <div className="home">

      {/* Original Banner */}
      <section className="hero-banner">
      </section>

      {/* Featured Books */}
      <section className="featured-section">

        <div className="section-heading">

          <div>
            <h2>Featured Books</h2>
            <p>Explore our best selling books</p>
          </div>

          <Link to="/products" className="view-all">
            View All →
          </Link>

        </div>

        {/* Book Cards */}
        <div className="book-container">

          {books.map((book) => (

            <div className="book-card" key={book.id}>

              <span className="book-category">
                {book.category}
              </span>

              {/* Product Image */}
              <div className={`book-cover ${book.cover}`}>

                <img
                  src={book.image}
                  alt={book.title}
                />

              </div>

              {/* Book Details */}
              <div className="book-info">

                <h3>{book.title}</h3>
                <p>{book.author}</p>

                <div className="book-price">
                  <strong>₹{book.price}</strong>
                  <del>₹{book.oldPrice}</del>
                </div>

                <button
                  className="buy-btn"
                  onClick={() => handleBuyNow(book)}
                >
                  Buy Now →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;
