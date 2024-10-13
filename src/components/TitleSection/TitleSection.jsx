import { NavLink } from "react-router-dom";
import css from "./TitleSection.module.css";
import { useState } from "react";
import icons from "../../img/icons.svg";

export default function TitleSection({ theme }) {
  const [buttonHover, setButtonHover] = useState(false);
  return (
    <section className={css.container}>
      <div className={css.titlePart}>
        <h1 className={css.title}>
          Unlock your potential with the best{" "}
          <span
            className={css.titleSpan}
            style={{ backgroundColor: theme.bright }}
          >
            language
          </span>{" "}
          tutors
        </h1>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink
          className={css.button}
          onMouseEnter={() => {
            setButtonHover(true);
          }}
          onMouseLeave={() => {
            setButtonHover(false);
          }}
          style={{
            backgroundColor: buttonHover ? theme.bright : theme.standart,
          }}
          to="/teachers"
        >
          Get started
        </NavLink>
      </div>
      <div className={css.imagePart} style={{ backgroundColor: theme.bright }}>
        <div
          className={css.mac}
          style={{
            background: `linear-gradient(180deg, ${theme.mac.start} 0%, ${theme.mac.end} 100%)`,
          }}
        >
          <svg className={css.appleIcon} style={{ fill: theme.bright }}>
            <use href={`${icons}#icon-apple`} />
          </svg>
        </div>
      </div>
    </section>
  );
}
