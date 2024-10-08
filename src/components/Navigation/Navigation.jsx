import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  //   const isLoggedIn = false;

  return (
    <nav className={css.navigation}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/teachers">
        Teachers
      </NavLink>
      {/* {isLoggedIn ? (
        <NavLink className={css.link} to="/favourites">
          Favourite
        </NavLink>
      ) : (
        ""
      )} */}
    </nav>
  );
}
