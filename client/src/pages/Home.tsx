import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Seção de Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MindMotion</h1>
          <p className="hero-description">
            Your journey to a calm and centered mind begins here
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="benefits">
        <h2>Why Choose MindMotion?</h2>
        <div className="benefit-items">
          <div className="benefit-item">
            <h3>Inspiring Quotes</h3>
            <p>
              Find daily doses of wisdom and motivation to center your mind.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Soothing Soundscapes</h3>
            <p>
              Immerse yourself in calming melodies and ambient sounds for deep
              relaxation.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Mood Insights & Tracking</h3>
            <p>
              Track your mood, get personalized insights, and stay motivated
              with expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Testemunhos */}
      <section className="testimonials">
        <h2>What Our Users Say About MindMotion</h2>
        <div className="testimonial-item">
          <p>
            "MindMotion helps me start my day with peace and inspiration. The
            quotes are perfect!"
          </p>
          <h4>- Jane Doe</h4>
        </div>
        <div className="testimonial-item">
          <p>
            "The soundscapes are incredibly calming, and I love discovering new
            quotes. A wonderful app!"
          </p>
          <h4>- David K.</h4>
        </div>
        <div className="testimonial-item">
          <p>
            "I never knew how much I needed this app until I started using it.
            It has transformed my daily routine."
          </p>
          <h4>- Sarah L.</h4>
        </div>
      </section>

      {/* Seção de Call to Action */}
      <section className="cta">
        <h2>Ready to Find Your Inner Peace?</h2>
        <button className="cta-btn">Explore MindMotion Now</button>
      </section>
    </div>
  );
};

export default Home;
