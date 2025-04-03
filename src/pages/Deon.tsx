import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/Deon.css';

const Deon: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="deon">
        <main className="main-content">
          <header className="headline">
            <h1 className="product-name">Deon</h1>
            <img className="group-3" src='${process.env.PUBLIC_URL}/img/group28.png' alt="Decorative icon" />
            <div className="product-category">PRODUCTS</div>
            <hr className="header-line" />
          </header>
          <section className="product-showcase">
            <div className="product-image-wrapper">
              <img className="product-image" src='${process.env.PUBLIC_URL}/img/Stuhl.png' alt="Deon chair top view" />
            </div>
            <p className="product-description">
              Deon brings a modern twist to classic design. With its sleek lines and oak legs, this chair combines comfort and style effortlessly. Perfect for any contemporary space, Deon is a must-have for your home.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Deon;