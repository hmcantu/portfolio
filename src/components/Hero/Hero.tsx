import { profile } from "../../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__greeting">HI, I'M</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__blurb">{profile.blurb}</p>
        <div className="hero__cta">
          <a className="button button--primary" href="#projects">
            View my work
          </a>
          <a className="button button--secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
