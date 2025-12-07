import { useState } from "react";
import "./AccountInfo.scss";

function AccountInfo({ onNext }) {
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
            />
            <input 
              type="text" 
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="pixel-input"
              autoComplete="off"
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
            />
          </div>
        </div>

        <button 
          className="next-btn"
          onClick={handleNext}
          disabled={!isFormValid}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default AccountInfo;