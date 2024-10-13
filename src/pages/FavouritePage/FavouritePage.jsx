import { useEffect, useState } from "react";
import css from "./FavouritePage.module.css";
import { auth, db } from "../../firebase";
import TeacherListItem from "../../components/TeacherListItem/TeacherListItem";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/helper/selectors";

export default function FavouritePage() {
  const [teachers, setTeachers] = useState([]);
  const [number, setNumber] = useState(4);
  const theme = useSelector(selectTheme);

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
            const favouritesIds = snapshot.val() || [];
            const newArray = favouritesIds.map((id) => data[id]);
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
  }, [teachers]);

  return (
    <section className={css.container}>
      <div></div>
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
            {teachers.slice(0, number).map((teacher, index) => {
              return (
                <li className={css.item} key={index}>
                  <TeacherListItem teacher={teacher} id={index} />
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
