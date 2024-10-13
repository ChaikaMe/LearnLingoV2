import { NavLink } from "react-router-dom";
import flags from "../../img/flags.svg";
import css from "./Logo.module.css";
import { useEffect, useState } from "react";

export default function Logo() {
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data.country_code);
      })
      .catch((error) =>
        console.error("Eroor when receiving user country", error)
      );
  }, []);

  return (
    <NavLink className={css.link} to="/">
      <svg className={css.icon}>
        <use href={`${flags}#icon-${countryCode.toLowerCase()}`} />
      </svg>
      LearnLingo
    </NavLink>
  );
}
