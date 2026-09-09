import { skills } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">Skills</h2>
        <ul className="skills__groups">
          {skills.map((group) => (
            <li key={group.category} className="skills__group">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
