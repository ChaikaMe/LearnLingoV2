import { useEffect, useRef, useState } from "react";
import css from "./FavouritePage.module.css";
import { auth, db } from "../../firebase";
import TeacherListItem from "../../components/TeacherListItem/TeacherListItem";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/helper/selectors";
import Filters from "../../components/Filters/Filters";

export default function FavouritePage() {
  const theme = useSelector(selectTheme);

  const [teachers, setTeachers] = useState([]);
  const [number, setNumber] = useState(4);
  const favIds = useRef([]);
  const filteredId = useRef([]);

  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");
  const filters = { language, setLanguage, level, setLevel, price, setPrice };

  const filteredTeachers = teachers.filter((teacher, index) => {
    const filteredLanguage =
      language === "" ? true : teacher.languages.includes(language);
    const filteredLevel = level === "" ? true : teacher.levels.includes(level);
    const filteredPrice = price === "" ? true : teacher.price_per_hour <= price;

    if (filteredLanguage && filteredLevel && filteredPrice) {
      filteredId.current.includes(index) ? "" : filteredId.current.push(index);
    } else {
      filteredId.current = filteredId.current.includes(index)
        ? filteredId.current.filter((item) => item !== index)
        : filteredId.current;
    }
    return filteredLanguage && filteredLevel && filteredPrice;
  });

  const handleClick = () => {
    const tempNum = number + 4;
    setNumber(tempNum);
  };

  const user = auth.currentUser;
  useEffect(() => {
    const fetchTeachers = async () => {
      const teachersRef = db.ref("1/");
      teachersRef.once("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const favouritesRef = db.ref(`users/${user.uid}`);
          favouritesRef.once("value", (snapshot) => {
            favIds.current = snapshot.val() || [];
            const newArray = favIds.current.map((id) => data[id]);
            setTeachers(newArray);
          });
        }
      });
      return () => teachersRef.off();
    };
    fetchTeachers();
  }, [user.uid]);

  useEffect(() => {
    setNumber(4);
  }, [teachers, language, price, level]);

  return (
    <section className={css.container}>
      <div className={css.filters}>
        <Filters filters={filters} />
      </div>
      <ul className={css.list}>
        {teachers.length === 0 ? (
          <h1 className={css.title}>
            You dont have any favourite teachers. Click on{" "}
            <NavLink
              className={css.link}
              style={{ backgroundColor: theme.standart }}
              to="/teachers"
            >
              Teachers page
            </NavLink>
            .
          </h1>
        ) : (
          <>
            {filteredTeachers.slice(0, number).map((teacher, index) => {
              return (
                <li className={css.item} key={index}>
                  <TeacherListItem
                    teacher={teacher}
                    id={favIds.current[index]}
                  />
                </li>
              );
            })}
          </>
        )}
      </ul>
      {number < teachers.length ? (
        <LoadMoreButton handleClick={handleClick} />
      ) : (
        ""
      )}
    </section>
  );
}
