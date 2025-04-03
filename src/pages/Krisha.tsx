import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/Krisha.css';

const Krisha: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="krisha">
        <main className="main-content">
          <header className="headline">
            <h1 className="product-name">Krisha</h1>
            <img className="group-3" src= 'img/group28.png' alt="Decorative icon" />
            <div className="product-category">PRODUCTS</div>
            <hr className="header-line" />
          </header>
          <section className="product-showcase">
            <div className="product-image-wrapper">
              <img className="product-image" src='img/Schuesseln.png' alt="Krisha bowls top view" />
            </div>
            <p className="product-description">
              Krisha bowls are the perfect blend of functionality and elegance. Crafted from premium wood, these bowls feature a modern design with a natural finish, making them ideal for serving or decor.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Krisha;