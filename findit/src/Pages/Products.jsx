
import { useLocation } from 'react-router-dom';
import './Product.css';

function Product() {

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get('category');

  const books = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/atomic.png'
    },
    {
      id: 2,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      price: 299,
      oldPrice: 450,
      category: 'Science',
      image: '/image/products/2_The_Psychology_of_Money.png'
    },
    {
      id: 3,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      price: 349,
      oldPrice: 499,
      category: 'General Books',
      image: '/image/products/3_Rich_Dad_Poor_Dad.png'
    },
    {
      id: 4,
      title: 'Ikigai',
      author: 'Hector Garcia',
      price: 279,
      oldPrice: 399,
      category: 'Development',
      image: '/image/products/4_Ikigai.png'
    },
    {
      id: 5,
      title: 'AI Revolution',
      author: 'Technology Expert',
      price: 450,
      oldPrice: 550,
      category: 'AI & Technology',
      image: '/image/products/ai.png'
    },
    {
      id: 6,
      title: 'World History',
      author: 'History Expert',
      price: 350,
      oldPrice: 450,
      category: 'History',
      image: '/image/products/history.png'
    },
    {
      id: 7,
      title: 'World Geography',
      author: 'Geography Expert',
      price: 320,
      oldPrice: 400,
      category: 'Geography',
      image: '/image/products/geography.png'
    },
    {
      id: 8,
      title: 'Hanuman Chalisa',
      author: 'Goswami Tulsidas',
      price: 250,
      oldPrice: 350,
      category: 'Religion',
      image: '/image/products/hanuman_chalisa.png'
    },
     {
      id: 8,
      title: 'Upanishad',
      author: 'yagyavalkya',
      price: 250,
      oldPrice: 350,
      category: 'Religion',
      image: '/image/products/upanishad.png'
    },
     {
      id: 9,
      title: 'Bahgvat Gita',
      author: 'maharishi Ved Vyas',
      price: 250,
      oldPrice: 350,
      category: 'Religion',
      image: '/image/products/bhagavad_gita.png'
    },
     {
      id: 10,
      title: 'Chaar Ved',
      author: 'Author',
      price: 250,
      oldPrice: 350,
      category: 'Religion',
      image: '/image/products/chaar_ved.png'
    },
     {
      id: 11,
      title: 'Devi Bhagwat Puran',
      author: '',
      price: 250,
      oldPrice: 350,
      category: 'Religion',
      image: '/image/products/devi_bhagwat_puran.png'
    },
      {
      id: 11,
      title: 'Shiv Puran',
      author: 'maharishi Ved Vyas',
      price: 250,
      oldPrice: 350,
      category: 'Religion',
      image: '/image/products/shiv_puran.png'
    },
    {
     id: 12,
      title: ' Shree Ramcharitmanas',
      author: 'Goswami Tulsidas',
      price: 250,
      oldPrice: 350,
      category: 'Religion',
      image: '/image/products/ramcharitmanas.png'
    },
  {
     id: 12,
      title: ' Push Ki Rat',
      author: 'Munshi Premchand',
      price: 250,
      oldPrice: 350,
      category: 'History',
      image: '/image/products/push_ki_rat.png'
    },
      {
     id: 13,
      title: ' garud puran',
      author: 'Maharishi Ved Vyas',
      price: 250,
      oldPrice: 350,
      category: 'Religion',
      image: '/image/products/garudpuran.jpg'
    },
      {
      id: 14,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/development-book-1.jpg'
    },
     {
      id: 15,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/development-book-2.jpg'
    },
     {
      id: 16,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/development-book-3.jpg'
    },
     {
      id: 17,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/development-book-4.jpg'
    },
     {
      id: 18,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/development-book-5.jpg'
    },
     {
      id: 19,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/development-book-6.jpg'
    },
     {
      id: 20,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/development-book-7.jpg'
    },
     {
      id: 21,
      title: 'India After Gandhi',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'History',
      image: '/image/products/history-book-1.jpg'
    },
     {
      id: 22,
      title: 'The Discovery of India',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/history-book-2.jpg'
    },
     {
      id: 23,
      title: 'Focus And Flow',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Development',
      image: '/image/products/development-book-3.jpg'
    },
     {
      id: 24,
      title: 'Focus And Flow',
      author: 'James Clear',
      price: 399,
      oldPrice: 599,
      category: 'Histroy',
      image: '/image/products/development-book-4.jpg'
    },
     {
      id: 25,
      title: 'Focus And Habits And Last',
      author: 'Richard Dawkins',
      price: 238,
      oldPrice: 599,
      category: 'History',
      image: '/image/products/science-book-3.jpg'
    },
     {
      id: 26,
      title: 'The Psychology of Money',
      author: 'Carl Sagan',
      price: 299,
      oldPrice: 450,
      category: 'Science',
      image: '/image/products/science-book-2.jpg'
    },
     {
      id: 27,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      price: 299,
      oldPrice: 450,
      category: 'Science',
      image: '/image/products/2_The_Psychology_of_Money.png'
    },
     {
      id: 28,
      title: 'A Brief Histroy Of Time',
      author: 'Stephen Hawking',
      price: 299,
      oldPrice: 450,
      category: 'Science',
      image: '/image/products/science-book-1.jpg'
    },
    {
      id: 29,
      title: 'The Gene',
      author: 'Darwin',
      price: 349,
      oldPrice: 450,
      category: 'Science',
      image: '/image/products/science-book-4.jpg'
    },
     {
      id: 30,
      title: 'Godaan',
      author: 'Munshi Premchand',
      price: 297,
      oldPrice: 450,
      category: 'History',
      image: '/image/products/01_Godaan_Munshi_Premchand.jpg'
    },
    {
      id: 31,
      title: 'Kafan',
      author: 'Munshi Premchand',
      price: 349,
      oldPrice: 450,
      category: 'History',
      image: '/image/products/02_Kafan_Munshi_Premchand.jpg'
    },
     {
      id: 32,
      title: 'Eidgah',
      author: 'Munshi Premchand',
      price: 349,
      oldPrice: 450,
      category: 'History',
      image: '/image/products/04_Eidgah_Munshi_Premchand.jpg'
    },
    {
      id: 33,
      title: 'Namak Ka Daroga',
      author: 'Munshi Premchand',
      price: 349,
      oldPrice: 450,
      category: 'History',
      image: '/image/products/05_Namak_Ka_Daroga_Munshi_Premchand.jpg'
    },
    
  ];

  const filteredBooks = selectedCategory
    ? books.filter(
        book => book.category === selectedCategory
      )
    : books;

  return (
    <div className="products-page">

      <div className="products-heading">

        <h1>
          {selectedCategory || 'All Books'}
        </h1>

        <p>Discover your next favourite book</p>

      </div>

      <div className="products-container">

        {filteredBooks.length > 0 ? (

          filteredBooks.map((book) => (

            <div className="product-card" key={book.id}>

              <div className="product-image">
                <img src={book.image} alt={book.title} />
              </div>

              <div className="product-info">

                <span>{book.category}</span>

                <h3>{book.title}</h3>

                <p>{book.author}</p>

                <div className="product-price">
                  <strong>₹{book.price}</strong>
                  <del>₹{book.oldPrice}</del>
                </div>

                <button className="product-btn">
                  Buy Now
                </button>

              </div>

            </div>

          ))

        ) : (

          <h2>No books available in this category.</h2>

        )}

      </div>

    </div>
  );
}

export default Product;
