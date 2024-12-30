// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VegItems from './VegItems';
import NonVegItems from './NonVegItems';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Cart from './Cart';
import PurchaseHistory from './PurchaseHistory';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link px-10 text-light fs-5">
                <i className="fa-solid fa-house-circle-exclamation"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/veg-items" className="nav-link px-10 text-light fs-5">
                <i className="fa-solid fa-carrot"></i> Veg Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/non-veg-items" className="nav-link px-10 text-light fs-5">
                <i className="fa-solid fa-fish"></i> Non-Veg Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link px-10 text-light fs-5">
                <i className="fa-solid fa-address-card"></i> About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link px-10 text-light fs-5">
                <i className="fa-solid fa-address-book"></i> Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link px-10 text-light fs-5">
                <i className="fa-solid fa-cart-shopping"></i> Cart ({cartItems.length})
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/purchase" className="nav-link text-light fs-5">
                <i className="fa-solid fa-history"></i> Purchase History
              </Link>
            </li>
          </ul>
        </nav>

        <div className="content mt-5 pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg-items" element={<VegItems />} />
            <Route path="/non-veg-items" element={<NonVegItems />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/purchase" element={<PurchaseHistory />} />
           
          </Routes>
        </div>
      </Router>
     
  );
};

export default App;
