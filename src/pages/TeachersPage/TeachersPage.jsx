import { useState } from "react";
import { db } from "../../firebase";
import css from "./TeachersPage.module.css";
import { useEffect } from "react";
import TeacherListItem from "../../components/TeacherListItem/TeacherListItem";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [number, setNumber] = useState(4);

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
  }, [teachers]);

  return (
    <section className={css.container}>
      <div></div>
      <ul className={css.list}>
        {teachers.slice(0, number).map((teacher, index) => {
          return (
            <li className={css.item} key={index}>
              <TeacherListItem teacher={teacher} id={index} />
            </li>
          );
        })}
      </ul>
      {number < teachers.length ? (
        <LoadMoreButton handleClick={handleClick} />
      ) : (
        ""
      )}
    </section>
  );
}
