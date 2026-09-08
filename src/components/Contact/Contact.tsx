import { profile } from "../../data/profile";
import "./Contact.css";

export default function Contact() {
  return (
    <nav className="contact">
      <ul className="contact__list">
        <li>
          <a className="contact__link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </li>
        <li>
          <a
            className="contact__link"
            href={profile.locationUrl}
            target="_blank"
            rel="noreferrer"
          >
            {profile.locationText}
          </a>
        </li>
        <li>
          <a className="contact__link" href={profile.resume} download>
            Resume
          </a>
        </li>
      </ul>
      <ul className="contact__social-list">
        <li>
          <a
            className="contact__social-link"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="contact__social-link"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
