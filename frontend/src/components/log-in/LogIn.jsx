import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, getUserPersonality } from "../../api";
import "./LogIn.scss";

function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Login user
      const loginResponse = await loginUser(formData);
      
      if (!loginResponse.success) {
        setError(loginResponse.message || "Login failed");
        setIsLoading(false);
        return;
      }

      // Store user data in localStorage
      const userData = loginResponse.data.user;
      localStorage.setItem('user', JSON.stringify(userData));

      // Check if user has personality set
      try {
        const personalityResponse = await getUserPersonality(userData.id);
        
        if (personalityResponse.success && personalityResponse.data) {
          // User has personality, redirect to home
          navigate('/home');
        } else {
          // User doesn't have personality, redirect to personality selection
          navigate('/personality');
        }
      } catch (personalityError) {
        // If personality check fails, assume no personality and redirect to personality selection
        console.log('Personality check error:', personalityError);
        navigate('/personality');
      }
    } catch (err) {
      // Check if it's a 401 error (invalid credentials)
      if (err.message.includes("Invalid credentials") || err.message.includes("401")) {
        setError("Account doesn't exist. Please register first.");
      } else {
        setError(err.message || "An error occurred during login");
      }
      setIsLoading(false);
    }
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
      handleOnLogin();
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

        {error && (
          <div className="error-message">
            {error}
            {error.includes("doesn't exist") && (
              <Link to="/register" className="error-link"> Go to Register</Link>
            )}
          </div>
        )}

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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
        </div>

        <button 
          className="login-btn"
          onClick={handleSubmit}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? 'LOGGING IN...' : 'LOG IN'}
        </button>

        <p className="register-prompt">
          Don't have a pet yet?{" "}
          <Link to="/register" className="register-link">
            Register one here.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;