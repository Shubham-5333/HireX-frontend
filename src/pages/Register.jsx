import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card">
        <h2 className="auth-title">Create an Account</h2>
        <p className="auth-subtitle">Join us and find your dream job</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label className="label-field">Full Name</label>
            <input type="text" className="input-field" placeholder="John Doe" />
          </div>
          <div className="input-group">
            <label className="label-field">Email</label>
            <input type="email" className="input-field" placeholder="you@example.com" />
          </div>
          <div className="input-group">
            <label className="label-field">Password</label>
            <input type="password" className="input-field" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="btn-primary auth-submit">Register</button>
        </form>
        
        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
