import React from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useState } from 'react';
import { registerUser } from '../features/authSlice';
import { toast } from 'react-toastify'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {

    // console.log(e.target.name);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    console.log("helll  ", formData);
    try {
      const response = await fetch("https://hirex-backend-hlth.onrender.com/api/register", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      
      toast(data.message.toUpperCase())
      if (response.ok) {
        dispatch(registerUser(data.user))
        navigate('/login')
      } else {
        console.log("registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card">
        <Link to='/'> <h1 className='auth-title' style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HireX</h1></Link>
        <br />
        <h2 className="auth-title">Create an Account</h2>
        <p className="auth-subtitle">Join us and find your dream job</p>

        <form className="auth-form" onSubmit={handleRegister}>
          <div className="input-group">
            <label className="label-field">Full Name</label>
            <input type="text" name='name' className="input-field" placeholder="John Doe" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="label-field">Email</label>
            <input type="email" name='email' className="input-field" placeholder="you@example.com" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="label-field">Password</label>
            <input type="password" name='password' className="input-field" placeholder="••••••••" onChange={handleChange} />
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
