import css from "./TeacherLevels.module.css";

export default function TeacherLevels({ teacher, theme }) {
  return (
    <ul className={css.list}>
      {teacher.levels.map((level, index) => (
        <li
          className={css.item}
          key={index}
          style={{ "--skillBgColor": theme.standart }}
        >
          #{level}
        </li>
      ))}
    </ul>
  );
}
