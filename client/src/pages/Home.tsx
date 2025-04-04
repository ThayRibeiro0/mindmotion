import React from 'react';
import './Home.css'; 

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
        <h2>Why Choose Us?</h2>
        <div className="benefit-items">
          <div className="benefit-item">
            <h3>Personalized Yoga</h3>
            <p>Tailored sessions for your needs and goals.</p>
          </div>
          <div className="benefit-item">
            <h3>Expert Instructors</h3>
            <p>Learn from certified yoga and meditation experts.</p>
          </div>
          <div className="benefit-item">
            <h3>Flexible Scheduling</h3>
            <p>Practice anytime, anywhere with flexible schedules.</p>
          </div>
        </div>
      </section>

      {/* Seção de Testemunhos */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-item">
          <p>"MindMotion has changed my life. The sessions are transformative!"</p>
          <h4>- Jane Doe</h4>
        </div>
        <div className="testimonial-item">
          <p>"I feel more relaxed and focused after just a few sessions."</p>
          <h4>- John Smith</h4>
        </div>
      </section>

      {/* Seção de Call to Action */}
      <section className="cta">
        <h2>Ready to Begin Your Journey?</h2>
        <button className="cta-btn">Join Now</button>
      </section>
    </div>
  );
};

export default Home;
