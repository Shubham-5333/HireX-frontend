import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../features/authSlice';


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
  })
}

const handleLogin = async (e) => {
  console.log("in hangle login");

  e.preventDefault()
  try {
    const response = await fetch("https://hirex-backend-hlth.onrender.com/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials:'include',
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    toast(data.message.toUpperCase())
    if(response.ok){
      dispatch(loginUser(data.user))
      navigate('/')
    }

  } catch (error) {
    console.log(error);

  }
}





return (
  <div className="auth-container animate-fade-in">
    <div className="auth-card">
      <Link to='/'> <h1 className='auth-title' style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HireX</h1></Link>
      <h2 className="auth-title">Welcome Back</h2>
      <p className="auth-subtitle">Login to continue to your account</p>

      <form className="auth-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label className="label-field">Email</label>
          <input type="email" name='email' className="input-field" placeholder="you@example.com" onChange={handleChange} />
        </div>
        <div className="input-group">
          <label className="label-field">Password</label>
          <input type="password" name='password' className="input-field" placeholder="••••••••" onChange={handleChange} />
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
