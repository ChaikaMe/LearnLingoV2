import css from "./AdvantagesSection.module.css";

export default function AdvantagesSection({ theme }) {
  return (
    <section className={css.container}>
      <ul className={css.list} style={{ "--color": theme.standart }}>
        <li className={css.item}>
          <p className={css.number}>32,000 +</p>
          <p className={css.text}>Experienced tutors</p>
        </li>
        <li className={css.item}>
          <p className={css.number}>300,000 +</p>
          <p className={css.text}>5-star tutor reviews</p>
        </li>
        <li className={css.item}>
          <p className={css.number}>120 +</p>
          <p className={css.text}>Subjects taught</p>
        </li>
        <li className={css.item}>
          <p className={css.number}>200 +</p>
          <p className={css.text}>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
}
