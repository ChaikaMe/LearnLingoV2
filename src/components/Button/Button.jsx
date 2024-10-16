import { useSelector } from "react-redux";
import css from "./Button.module.css";
import { selectTheme } from "../../redux/helper/selectors";
import { useState } from "react";

export default function Button({ text, type, onClick, width, height }) {
  const theme = useSelector(selectTheme);
  const [buttonHover, setButtonHover] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setButtonHover(true);
      }}
      onMouseLeave={() => {
        setButtonHover(false);
      }}
      className={css.button}
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: buttonHover ? theme.bright : theme.standart,
        width: width,
        height: height,
      }}
    >
      {text}
    </button>
  );
}
