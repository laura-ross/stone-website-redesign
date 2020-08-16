import React from "react";
import "../style/App.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <figure className="hero-img"></figure>
        <div className="hero-heading" data-aos="fade-down">
          <h2>Artist,</h2>
          <h2>Musician, </h2>
          <h2>Activist</h2>
          <button className="btn">View Work</button>
        </div>
      </section>
      <section className="bio-section">
        <div className="background-accent-box"></div>
        <div className="bio-wrapper">
          <figure className="bio-img" ></figure>
          <div className="bio-content" data-aos="fade-up">
            <h3>Bio</h3>
            <p>Stone Malone is an American artist, musician, and activist. Best described as a surrealist with a comic-book flare, Malone has developed an underground following for incredibly detailed oil paintings that are recreations of his early work in ink-and-color pencil...</p>
            <button className="btn secondary-btn" data-aos="fade-up">Read More...</button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <button className="btn secondary-btn cta-btn" data-aos="fade-up">Follow @stonemalonegallery on Instagram</button>
      </section>
    </div>
  );
}

export default Home;
