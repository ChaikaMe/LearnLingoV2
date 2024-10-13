import css from "./TeacherDescription.module.css";

export default function TeacherDescription({ teacher }) {
  return (
    <div className={css.descContainer}>
      <span className={css.grayText}>
        Speaks:{" "}
        <span className={css.languages}>{teacher.languages.join(", ")}</span>
      </span>
      <span className={css.grayText}>
        Lesson Info:{" "}
        <span className={css.description}>{teacher.lesson_info}</span>
      </span>
      <span className={css.grayText}>
        Conditions:{" "}
        <span className={css.description}>{teacher.conditions}</span>
      </span>
    </div>
  );
}
