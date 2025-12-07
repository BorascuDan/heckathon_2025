import './Navbar.scss';

const Navbar = ({ petName = "ESTJ CAT" }) => {
  return (
    <nav className="navigation-bar">
      <div className="nav-content">
        <div className="pet-info">
            {/* LOGO */}
            <span className="pet-icon">🐾</span>
        </div>
        <div className="pet-name">
          ETSJ CAT
        </div>
      </div>
    </nav>
  );
};

export default Navbar;