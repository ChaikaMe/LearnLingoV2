import { useSelector } from "react-redux";
import css from "./HomePage.module.css";
import { selectTheme } from "../../redux/helper/selectors";
import TitleSection from "../../components/TitleSection/TitleSection";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";

export default function HomePage() {
  const theme = useSelector(selectTheme);
  return (
    <div className={css.container}>
      <TitleSection theme={theme} />
      <AdvantagesSection theme={theme} />
    </div>
  );
}
