import { profile } from "../../data/profile";
import "./Contact.css";

export default function Contact() {
  return (
    <nav className="contact">
      <ul className="contact__info-list">
        <li>
          <a className="contact__info-link" href={`mailto:${profile.email}`}>
            📧 {profile.email}
          </a>
        </li>
        <li>
          <a
            className="contact__info-link"
            href={profile.locationUrl}
            target="_blank"
            rel="noreferrer"
          >
            📍 {profile.locationText}
          </a>
        </li>
        <li>
          <a
            className="contact__info-link contact__info-link--highlight"
            href={profile.resume}
            download
          >
            📄 Download my resume (PDF)
          </a>
        </li>
      </ul>

      <ul className="contact__social-list">
        <li>
          <a
            className="contact__social-circle"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
        </li>
        <li>
          <a
            className="contact__social-circle"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            IN
          </a>
        </li>
      </ul>
    </nav>
  );
}
