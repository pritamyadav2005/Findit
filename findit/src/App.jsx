
import { Routes, Route } from 'react-router-dom';

// Common Components
import Navbar from './Componant/Navbar';
import Footer from './Componant/Footer';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Categories from './Pages/Categories';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Payment from './Pages/Payment';
import About from './Pages/About';

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Categories Page */}
        <Route path="/categories" element={<Categories />} />

        {/* Products Page */}
        <Route path="/products" element={<Products />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Payment Page */}
        <Route path="/payment" element={<Payment />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
