import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import jensonImage from '../assets/img/Tisch.png'; 
import group28 from '../assets/img/group28.png';
import '../styles/Jenson.css';

const Jenson: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="jenson">
        <main className="main-content">
          <header className="headline">
            <h1 className="product-name">

            Jenson
            </h1>
            <img className="group-3" src={group28} alt="Decorative icon" />
            <div className="product-category">PRODUCTS</div>
            <hr className="header-line" />
          </header>
          <section className="product-showcase">
            <div className="product-image-wrapper">
              <img className="product-image" src={jensonImage} alt="Jenson table top view" />
            </div>
            <p className="product-description">
              Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Jenson;