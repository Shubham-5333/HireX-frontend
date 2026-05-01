import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import FindJob from './pages/FindJob';
import Home from './pages/Home';
import PostJob from './pages/PostJob';
import Login from './pages/Login';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Profile from './pages/Profile';
import AppliedJobs from './pages/AppliedJobs';
import { useSelector } from 'react-redux';


function App() {
  // const isLoggedIn = useSelector((state)=>state.authentication.isAuthenticated)
  return (
    <BrowserRouter>
        <ToastContainer />
      <Routes>
        
        {/* Main Application Layout for protected/internal routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="find-job" element={<FindJob />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="profile" element={<Profile />}/>
          <Route path="applied-jobs" element={<AppliedJobs />}/>
        </Route>

        {/* Auth routes without MainLayout */}
        <Route path="/login"element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
