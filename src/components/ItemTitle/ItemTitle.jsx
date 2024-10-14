import FavouriteButton from "../FavouriteButton/FavouriteButton";
import css from "./ItemTitle.module.css";

export default function ItemTitle({ teacher, icons, theme, id }) {
  return (
    <div className={css.itemTitle}>
      <div className={css.teacherName}>
        <span className={css.teacherNameSpan}>Languages</span>
        {teacher.name + " " + teacher.surname}
      </div>
      <div className={css.lessonsDataContainer}>
        <div className={css.lessonsData}>
          <span className={css.lessonsSpan}>
            <svg className={css.bookIcon}>
              <use href={`${icons}#icon-book`} />
            </svg>
            Lessons Online
          </span>
          <span className={css.lessonsSpan}>
            Lessons done: {teacher.lessons_done}
          </span>
          <span className={css.lessonsSpan}>
            <svg className={css.starIcon}>
              <use href={`${icons}#icon-star`} />
            </svg>
            Raring: {teacher.rating}
          </span>
          <span className={css.lessonsSpan}>
            Price / 1 hour:{" "}
            <span style={{ color: "#38cd3e" }}>{teacher.price_per_hour}$</span>
          </span>
        </div>
        <div className={css.favbutton}>
          <FavouriteButton icons={icons} theme={theme} id={id} />
        </div>
      </div>
    </div>
  );
}
