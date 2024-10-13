import { useSelector } from "react-redux";
import css from "./WelcomeUser.module.css";
import icons from "../../img/icons.svg";
import { selectTheme } from "../../redux/helper/selectors";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function WelcomeUser() {
  const theme = useSelector(selectTheme);
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css.container}>
      <p className={css.letter}>Welcome, {auth.currentUser.displayName}!</p>
      <button className={css.button} type="button" onClick={logOut}>
        <svg className={css.icon} style={{ stroke: theme.standart }}>
          <use href={`${icons}#icon-log-in`} />
        </svg>
      </button>
    </div>
  );
}
