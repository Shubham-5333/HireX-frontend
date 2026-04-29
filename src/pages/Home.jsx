import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container animate-fade-in">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Next <span className="highlight">Dream Job</span>
          </h1>
          <p className="hero-subtitle">
            Connect with top companies around the world. Discover opportunities
            that match your skills, passion, and ambition smoothly.
          </p>
          <div className="hero-actions">
            <Link to="/find-job" className="btn-primary">Browse Jobs</Link>
            <Link to="/post-job" className="btn-secondary">Post a Job</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Team collaborating" 
            className="hero-image" 
          />
        </div>
      </div>
      
      <div className="features-section">
        <h2 className="section-title">Why Choose HireX?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Global Reach</h3>
            <p>Access thousands of job listings from leading global enterprises and innovative startups.</p>
          </div>
          <div className="feature-card">
            <h3>Smart Matching</h3>
            <p>Our algorithms recommend roles tailored precisely to your uploaded resumes and past experience.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Application</h3>
            <p>Apply in one click directly from our unified and sleek dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
