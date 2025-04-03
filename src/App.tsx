import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Jenson from './pages/Jenson';
import Deon from './pages/Deon'; 
import Krisha from './pages/Krisha'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/jenson" element={<Jenson />} />
        <Route path="/deon" element={<Deon />} /> 
        <Route path="/krisha" element={<Krisha />} /> 
      </Routes>
    </Router>
  );
};

export default App;