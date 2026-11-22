
import { NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userName, enrolledCourses } = useAppContext();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <GraduationCap size={25} />
          </span>
          <span>EduNova</span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="nav-profile">
          <span>{enrolledCourses.length} enrolled</span>
          {userName && <span className="profile-name">Hi, {userName}</span>}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
