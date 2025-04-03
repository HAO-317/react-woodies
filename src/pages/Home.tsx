import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="home">
        <div className="content-wrapper">
          <div className="content-container">
            <section className="text-content">
              <h1>
                <span className="text-wrapper"> Are you looking for wooden furniture for your place?</span>
              </h1>
              <p className="tagline">This is the Right Place</p>
              <div className="cta-wrapper">
                <Link to="/products" className="cta-button">Explore Categories</Link>
              </div>
            </section>
            <section className="image-content">
              <div className="image-container">

                <img className="furniture-image" src="img/Home.png" alt="Modern wooden furniture set" />
              </div>
              <div className="background-overlay"></div> 
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;