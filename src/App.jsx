import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import FindJob from './pages/FindJob';
import Home from './pages/Home';
import PostJob from './pages/PostJob';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Application Layout for protected/internal routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="find-job" element={<FindJob />} />
          <Route path="post-job" element={<PostJob />} />
        </Route>
        
        {/* Auth routes without MainLayout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
