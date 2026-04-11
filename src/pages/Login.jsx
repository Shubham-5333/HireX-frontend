import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to continue to your account</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label className="label-field">Email</label>
            <input type="email" className="input-field" placeholder="you@example.com" />
          </div>
          <div className="input-group">
            <label className="label-field">Password</label>
            <input type="password" className="input-field" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="btn-primary auth-submit">Login</button>
        </form>
        
        <p className="auth-footer">
          Don't have an account? <Link to="/register" className="auth-link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
