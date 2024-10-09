import { NavLink } from "react-router-dom";
import icons from "../../img/icons.svg";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink className={css.link} to="/">
      <svg className={css.icon}>
        <use href={`${icons}#icon-ukraine`} />
      </svg>
      LearnLingo
    </NavLink>
  );
}
