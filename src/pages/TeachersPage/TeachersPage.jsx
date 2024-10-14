import { useRef, useState, useEffect } from "react";
import { db } from "../../firebase";
import css from "./TeachersPage.module.css";
import TeacherListItem from "../../components/TeacherListItem/TeacherListItem";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Filters from "../../components/Filters/Filters";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [number, setNumber] = useState(4);
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

  useEffect(() => {
    const fetchTeachers = async () => {
      const teachersRef = db.ref("1/");
      teachersRef.once("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setTeachers(data);
        }
      });
      return () => teachersRef.off();
    };
    fetchTeachers();
  }, []);

  useEffect(() => {
    setNumber(4);
  }, [teachers, language, price, level]);

  return (
    <section className={css.container}>
      <div className={css.filters}>
        <Filters filters={filters} />
      </div>
      <ul className={css.list}>
        {filteredTeachers.slice(0, number).map((teacher, index) => {
          return (
            <li className={css.item} key={index}>
              <TeacherListItem
                teacher={teacher}
                id={filteredId.current[index]}
              />
            </li>
          );
        })}
      </ul>
      {number < filteredTeachers.length ? (
        <LoadMoreButton handleClick={handleClick} />
      ) : (
        ""
      )}
    </section>
  );
}
