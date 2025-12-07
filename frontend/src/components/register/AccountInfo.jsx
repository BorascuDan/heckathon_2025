import { useState } from "react";
import { Link } from "react-router-dom";
import "./AccountInfo.scss";

function AccountInfo({ onNext, isLoading = false, error = "" }) {
  const [formData, setFormData] = useState({
    age: "",
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    // Aici poți adăuga validări simple dacă e necesar
    if (formData.email && formData.password && formData.name) {
      onNext && onNext(formData);
    }
  };

  // Verificăm dacă toate câmpurile sunt completate pentru a activa butonul
  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  return (
    <div className="step1-container">
      <div className="step1-content">
        <h1 className="step1-title">STEP 1</h1>
        <p className="step1-subtitle">Who are you?</p>

        {error && (
          <div className="error-message" style={{ 
            fontFamily: 'inherit', 
            fontSize: '14px', 
            color: '#ff6b6b', 
            background: 'rgba(255, 107, 107, 0.1)', 
            border: '2px solid #ff6b6b', 
            padding: '12px 16px', 
            marginBottom: '24px', 
            textAlign: 'center' 
          }}>
            {error}
          </div>
        )}

        <div className="input-grid">
          <div className="input-row split-row">
            <input 
              type="text" 
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="pixel-input"
              autoComplete="off"
              disabled={isLoading}
            />
            <input 
              type="text" 
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="pixel-input"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>

          <div className="input-row">
            <input 
              type="email" 
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="pixel-input"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>

          <div className="input-row">
            <input 
              type="password" 
              name="password"
              placeholder="Very Strong Password"
              value={formData.password}
              onChange={handleChange}
              className="pixel-input"
              autoComplete="off"
              disabled={isLoading}
            />
          </div>
        </div>

        <button 
          className="next-btn"
          onClick={handleNext}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? 'REGISTERING...' : 'NEXT'}
        </button>

        <p className="log-in-prompt">
          Already owning a pet?{" "}
          <Link to="/log-in" className="log-in-link">
            Log in and say hello.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AccountInfo;