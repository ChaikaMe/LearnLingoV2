import { useState } from "react";
import css from "./LoadMoreButton.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/helper/selectors";

export default function LoadMoreButton({ handleClick }) {
  const [buttonHover, setButtonHover] = useState(false);
  const theme = useSelector(selectTheme);
  return (
    <button
      className={css.button}
      onClick={() => {
        handleClick();
      }}
      onMouseEnter={() => {
        setButtonHover(true);
      }}
      onMouseLeave={() => {
        setButtonHover(false);
      }}
      style={{
        backgroundColor: buttonHover ? theme.bright : theme.standart,
      }}
    >
      Load more
    </button>
  );
}
