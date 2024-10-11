import { useSelector } from "react-redux";
import css from "./HomePage.module.css";
import { selectTheme } from "../../redux/helper/selectors";

export default function HomePage() {
  const theme = useSelector(selectTheme);
  console.log(1);
  return <div></div>;
}
