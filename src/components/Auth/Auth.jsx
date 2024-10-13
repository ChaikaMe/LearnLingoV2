import css from "./Auth.module.css";
import icons from "../../img/icons.svg";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/helper/selectors";

export default function Auth({ setModalLogState, setModalRegState }) {
  const theme = useSelector(selectTheme);
  return (
    <div className={css.container}>
      <button
        className={css.loginButton}
        type="button"
        onClick={() => setModalLogState(true)}
      >
        <svg className={css.icon} style={{ stroke: theme.standart }}>
          <use href={`${icons}#icon-log-in`} />
        </svg>
        Log In
      </button>
      <button
        className={css.regButton}
        type="button"
        onClick={() => setModalRegState(true)}
      >
        Registration
      </button>
    </div>
  );
}
