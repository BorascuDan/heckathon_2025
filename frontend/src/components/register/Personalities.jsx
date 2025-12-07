import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPersonalities, setUserPersonality } from "../../api";
import "./Personalities.scss";

function Personalities({ onNext }) {
    const [selectedPersonality, setSelectedPersonality] = useState(null);
    const [personalities, setPersonalities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const gridRef = useRef(null);
    const navigate = useNavigate();

    // Fetch personalities from the backend
    useEffect(() => {
        const fetchPersonalities = async () => {
            try {
                const response = await getAllPersonalities();
                if (response.success && response.data) {
                    // Extract just the code part (e.g., "ISFP" from "Adventurer (ISFP)")
                    const formattedPersonalities = response.data.map(p => ({
                        id: p.id,
                        name: p.name,
                        code: extractPersonalityCode(p.name)
                    }));
                    
                    // Organize into 4x4 grid
                    const grid = organizeIntoGrid(formattedPersonalities);
                    setPersonalities(grid);
                } else {
                    setError("Failed to load personalities");
                }
            } catch (err) {
                console.error("Error fetching personalities:", err);
                setError(err.message || "Failed to load personalities");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPersonalities();
    }, []);

    // Extract the code from personality name like "Adventurer (ISFP)" -> "ISFP"
    const extractPersonalityCode = (name) => {
        const match = name.match(/\(([^)]+)\)/);
        return match ? match[1] : name;
    };

    // Organize personalities into 4x4 grid
    const organizeIntoGrid = (personalitiesArray) => {
        const grid = [];
        for (let i = 0; i < personalitiesArray.length; i += 4) {
            grid.push(personalitiesArray.slice(i, i + 4));
        }
        return grid;
    };

    const handlePersonalitySelect = (e, personality) => {
        e.stopPropagation();
        setSelectedPersonality(personality);
    };

    const handleContainerClick = (e) => {
        if (gridRef.current && !gridRef.current.contains(e.target)) {
            setSelectedPersonality(null);
        }
  };

    const handleGetPet = async () => {
        if (!selectedPersonality) return;

        // If onNext is provided (from Registration flow), use it
        if (onNext) {
            onNext(selectedPersonality.code);
            return;
        }

        // Otherwise, this is standalone (from login flow)
        setIsSaving(true);
        setError("");

        try {
            // Get user from localStorage
            const userStr = localStorage.getItem('user');
            if (!userStr) {
                setError("User not found. Please login again.");
                navigate('/log-in');
                return;
            }

            const user = JSON.parse(userStr);
            
            // Set personality on backend
            const response = await setUserPersonality({
                user_id: user.id,
                personality_id: selectedPersonality.id
            });

            if (response.success) {
                // Navigate to home
                navigate('/home');
            } else {
                setError(response.message || "Failed to set personality");
            }
        } catch (err) {
            console.error("Error setting personality:", err);
            setError(err.message || "Failed to set personality");
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="step2-container">
                <div className="step2-content">
                    <p className="step2-subtitle">Loading personalities...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="step2-container" onClick={handleContainerClick}>
        <div className="step2-content">
            <h1 className="step2-title">{onNext ? 'STEP 2' : 'SELECT PERSONALITY'}</h1>
            <p className="step2-subtitle">What's your personality?</p>

            {error && (
                <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                    {error}
                </div>
            )}

            <div className="personality-grid" ref={gridRef}>
            {personalities.map((row, rowIndex) => (
                <div key={rowIndex} className="personality-row">
                {row.map((personality) => (
                    <button
                    key={personality.id}
                    className={`personality-btn ${
                        selectedPersonality?.id === personality.id ? 'selected' : ''
                    }`}
                    onClick={(e) => handlePersonalitySelect(e, personality)}
                    disabled={isSaving}
                    >
                    {personality.code}
                    </button>
                ))}
                </div>
            ))}
            </div>

            <p className="step2-hint">CHOOSE WISELY - Your pet awaits.</p>

            <button
                className="get-pet-btn"
                onClick={handleGetPet}
                disabled={!selectedPersonality || isSaving}
            >
            {isSaving ? 'SAVING...' : 'GET PET'}
            </button>
        </div>
        </div>
    );
}

export default Personalities;