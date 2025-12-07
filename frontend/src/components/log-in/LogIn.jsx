import { useState } from "react";
import "./LogIn.scss";

function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleOnLogin = () => {
    // TO DO: call the API to login, create session and redirect to home
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.email && formData.password) {
      onLogin && onLogin(formData);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isFormValid) {
      handleSubmit();
    }
  };

  const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">LOG IN</h1>
        <p className="login-subtitle">Welcome back!</p>

        <div className="input-grid">
          <div className="input-row">
            <input 
              type="email" 
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className="pixel-input"
              autoComplete="email"
            />
          </div>

          <div className="input-row">
            <input 
              type="password" 
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className="pixel-input"
              autoComplete="current-password"
            />
          </div>
        </div>

        <button 
          className="login-btn"
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default LogIn;