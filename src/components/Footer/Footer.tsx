import Contact from "../Contact/Contact";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <h2 className="footer__title">Get in Touch</h2>
        <p className="footer__invite">
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out!
        </p>
        <Contact />
      </div>
    </footer>
  );
}
