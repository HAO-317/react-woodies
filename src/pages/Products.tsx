import React from 'react';
import { Link } from 'react-router-dom'; 
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import group28 from '../assets/img/group28.png';
import jensonImage from '../assets/img/Tisch.png';
import deonImage from '../assets/img/Stuhl.png';
import krishaImage from '../assets/img/Schuesseln.png';
import '../styles/Products.css';

const Products: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="products">
        <section className="product-section">
          <div className="headline">
            <h1 className="text-wrapper-4">Who we are</h1>
            <img className="group-3" src={group28} alt="Decorative icon" />
            <p className="text-wrapper-5">ABOUT US</p>
            <hr className="line-2" />
          </div>
          <div className="product-list">
            <article className="product-card">
              <h2 className="product-card_title">Jenson</h2>
              <img className="product-card_image" src={jensonImage} alt="Jenson product" />
              <Link to="/jenson" className="product-card_button">Shop now</Link> 
            </article>
            <article className="product-card">
              <h2 className="product-card_title">Deon</h2>
              <img className="product-card_image" src={deonImage} alt="Deon product" />
              <Link to="/deon" className="product-card_button">Shop now</Link> 
            </article>
            <article className="product-card">
              <h2 className="product-card_title">Krisha</h2>
              <img className="product-card_image" src={krishaImage} alt="Krisha product" />
              <Link to="/krisha" className="product-card_button">Shop now</Link> 
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;