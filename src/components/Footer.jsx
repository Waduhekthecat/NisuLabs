import "./Footer.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="footer-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="footer-icon" />
          </a>
        <p>© {new Date().getFullYear()} NISU Laboratories | All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
