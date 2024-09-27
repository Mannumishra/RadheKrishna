import React, { useState } from 'react';
import './Login.css'; // Make sure to create and import a CSS file for styling
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (email !== 'radhekrishna@gmail.com' && password !== 'RadheKrishna@123') {
      toast.error('Invalid Email Address or password');
    }
    else {
      sessionStorage.setItem("login", true)
      window.location.href = "/dashboard";
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <h2 className="login-title">Admin Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group password-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;