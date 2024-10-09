import css from "./Auth.module.css";
import icons from "../../img/icons.svg";

export default function Auth() {
  return (
    <div className={css.container}>
      <button className={css.loginButton} type="button">
        <svg className={css.icon} style={{ stroke: "red" }}>
          <use href={`${icons}#icon-log-in`} />
        </svg>
        Log In
      </button>
      <button className={css.regButton} type="button">
        Registration
      </button>
    </div>
  );
}
