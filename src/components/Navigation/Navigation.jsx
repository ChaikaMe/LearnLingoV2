import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation({ isLoggedIn }) {
  return (
    <nav className={css.navigation}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/teachers">
        Teachers
      </NavLink>
      {isLoggedIn ? (
        <NavLink className={css.link} to="/favourite">
          Favourite
        </NavLink>
      ) : (
        ""
      )}
    </nav>
  );
}
