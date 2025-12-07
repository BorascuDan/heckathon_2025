import { useState, useRef } from "react";
import "./Personalities.scss";

function Personalities({ onNext }) {
    const [selectedPersonality, setSelectedPersonality] = useState(null);
    const gridRef = useRef(null);

    const personalities = [
        ['INTP', 'ENTJ', 'INFP', 'ENFJ'],
        ['ISTP', 'ESTJ', 'INFJ', 'ENFP'],
        ['ISTJ', 'ESFJ', 'ISFP', 'ESFP'],
        ['INTJ', 'ENTP', 'ISFJ', 'ESTP']
    ];

    const handlePersonalitySelect = (e, personality) => {
        e.stopPropagation();
        setSelectedPersonality(personality);
    };

    const handleContainerClick = (e) => {
        if (gridRef.current && !gridRef.current.contains(e.target)) {
            setSelectedPersonality(null);
        }
  };

    const handleGetPet = () => {
        if (selectedPersonality) {
            onNext && onNext(selectedPersonality);
        }
    };

    return (
        <div className="step2-container" onClick={handleContainerClick}>
        <div className="step2-content">
            <h1 className="step2-title">STEP 2</h1>
            <p className="step2-subtitle">What's your personality?</p>

            <div className="personality-grid" ref={gridRef}>
            {personalities.map((row, rowIndex) => (
                <div key={rowIndex} className="personality-row">
                {row.map((personality) => (
                    <button
                    key={personality}
                    className={`personality-btn ${
                        selectedPersonality === personality ? 'selected' : ''
                    }`}
                    onClick={(e) => handlePersonalitySelect(e, personality)}
                    >
                    {personality}
                    </button>
                ))}
                </div>
            ))}
            </div>

            <p className="step2-hint">CHOOSE WISELY - Your pet awaits.</p>

            <button
                className="get-pet-btn"
                onClick={handleGetPet}
                disabled={!selectedPersonality}
            >
            GET PET
            </button>
        </div>
        </div>
    );
}

export default Personalities;