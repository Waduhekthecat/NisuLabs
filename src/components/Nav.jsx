import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <div className="navbar">
        <header>
            <div className="navbar-logo-container">
                <Link to="/" onClick={() => setIsOpen(false)} className="navbar-logo">NISU Labs</Link>
            </div>
            <div className={`navbar-links-container ${isOpen ? 'active' : ''}`}>
                <ul className="nav_links">
                    <li><Link to="/DLC" onClick={() => setIsOpen(false)}>DLC</Link></li>
                    <li><Link to="/Technologies" onClick={() => setIsOpen(false)}>Technologies</Link></li>
                    <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-btn-container">
                <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
        </div>
    );
};

export default Nav;
