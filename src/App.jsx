import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./App.css";
import Landingpage from './pages/Landingpage';
import Comingsoon from './components/Comingsoon';
import Reservation from './pages/Reservation';
import Menupage from './pages/Menupage';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Landingpage />} />
        <Route path='/' element={<Landingpage />} />
        {/* <Route path='/' element={<Comingsoon />} /> */}
        <Route path='/reservation' element={<Reservation />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menupage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
