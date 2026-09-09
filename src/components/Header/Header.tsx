import { useState } from "react";
import { profile } from "../../data/profile";
import Contact from "../Contact/Contact";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__brand" href="#home" onClick={closeMenu}>
          {profile.name}
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={isOpen}
          aria-controls="header-nav"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <nav
          id="header-nav"
          className={`header__nav ${isOpen ? "header__nav--open" : ""}`}
        >
          <a className="header__link" href="#home" onClick={closeMenu}>
            Home
          </a>
          <a className="header__link" href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a className="header__link" href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a className="header__link" href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <div className="header__mobile-contact">
            <Contact />
          </div>
        </nav>
      </div>
    </header>
  );
}
