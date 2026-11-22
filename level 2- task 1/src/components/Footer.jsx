
import { GraduationCap, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-icon">
              <GraduationCap size={24} />
            </span>
            EduNova
          </Link>
          <p>
            Learn new skills, explore opportunities, and build
            a brighter future with EduNova.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/#courses">Our Courses</Link>
          <Link to="/about">Our Mission</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} EduNova. Made with{" "}
          <Heart size={14} /> for learners.
        </p>

        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
