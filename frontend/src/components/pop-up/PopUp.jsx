// ATENȚIE: Importăm PopUp.scss pentru că așa se numește fișierul tău din screenshot
import "./PopUp.scss";

function MentalHealthPopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        
        {/* Header */}
        <div className="popup-header">
          <div className="header-title">
            <span className="heart-icon">♥</span> MENTAL HEALTH
          </div>
          <button className="close-icon-btn" onClick={onClose}>×</button>
        </div>

        {/* Body */}
        <div className="popup-body">
          <p className="main-message">
            YOUR WELLBEING MATTERS. IF YOU'RE STRUGGLING, PLEASE REACH OUT TO A PROFESSIONAL.
          </p>

          <div className="resource-box teal-theme">
            <div className="resource-header">
              <span className="icon">📞</span> CRISIS HOTLINE
            </div>
            <div className="highlight-number">801.200</div>
            <div className="subtext">24/7 SUPPORT</div>
          </div>

          <div className="resource-box purple-theme">
            <div className="resource-header">
              <span className="icon">🔗</span> FIND A THERAPIST
            </div>
            <ul className="link-list">
              <li><a href="https://happyminds.ro/" target="_blank" rel="noopener noreferrer">HAPPYMINDS.RO</a></li>
              <li><a href="https://www.centrulsocialtfh.ro/" target="_blank" rel="noopener noreferrer">CENTRULSOCIALTFH.RO</a></li>
              <li><a href="https://www.estuar.org/" target="_blank" rel="noopener noreferrer">ESTUAR.ORG</a></li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="popup-footer">
          <button className="close-main-btn" onClick={onClose}>
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}

export default MentalHealthPopup;