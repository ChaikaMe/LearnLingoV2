import Auth from "../Auth/Auth";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.container}>
      <Logo />
      <Navigation />
      <Auth />
    </header>
  );
}
