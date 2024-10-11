import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import UserAuth from "../UserAuth/UserAuth";
import { useState } from "react";

export default function AppBar({ setModalRegState, setModalLogState }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className={css.container}>
      <Logo />
      <Navigation isLoggedIn={isLoggedIn} />
      <UserAuth
        setModalRegState={setModalRegState}
        setModalLogState={setModalLogState}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </header>
  );
}
