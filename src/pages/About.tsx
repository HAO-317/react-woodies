import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <>  
      <Nav />
      <main className="about">
        <div className="main-content">
          <header className="headline">
            <h1 className="text-wrapper-4">Who we are</h1>
            <img className="group-3" src='${process.env.PUBLIC_URL}/img/group28.png' alt="Decorative icon" />
            <p className="text-wrapper-5">ABOUT US</p>
            <hr className="line-2" />
          </header>
          <section className="group-4">
            <h2 className="WOODIES-is-the-home">
              <span className="span">WOODIES</span>
              <span className="text-wrapper-6"> is the </span>
              <span className="span">home of modern wooden furniture</span>
            </h2>
            <p className="p">the answer to your need for furniture with shapes, sizes and colors.</p>
          </section>
          <img className="group-2" src='${process.env.PUBLIC_URL}/img/About.png' alt="Furniture showcase" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;