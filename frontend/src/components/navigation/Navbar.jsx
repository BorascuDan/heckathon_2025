import './Navbar.scss';

const Navbar = ({ petName = "CAT" }) => {
  return (
    <nav className="navigation-bar">
      <div className="nav-content">
        <div className="pet-info">
            {/* LOGO */}
            <span className="pet-icon">🐾</span>
        </div>
        <div className="pet-name">
          {petName}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;