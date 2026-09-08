import { profile } from "../../data/profile";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__brand" href="#home">
          {profile.name}
        </a>
        <nav className="header__nav">
          <a className="header__link" href="#home">
            Home
          </a>
          <a className="header__link" href="#skills">
            Skills
          </a>
          <a className="header__link" href="#projects">
            Projects
          </a>
          <a className="header__link" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
