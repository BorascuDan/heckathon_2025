import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api";
import AccountInfo from "./AccountInfo";

function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAccountInfoNext = async (accountData) => {
    setIsLoading(true);
    setError("");

    try {
      // Register the user
      const response = await registerUser({
        username: accountData.name,
        email: accountData.email,
        password: accountData.password,
        age: parseInt(accountData.age, 10)
      });

      if (response.success) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        
        // Redirect to personality selection page
        navigate('/personality');
      } else {
        setError(response.message || "Registration failed");
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || "An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AccountInfo 
      onNext={handleAccountInfoNext} 
      isLoading={isLoading}
      error={error}
    />
  );
}

export default Registration;