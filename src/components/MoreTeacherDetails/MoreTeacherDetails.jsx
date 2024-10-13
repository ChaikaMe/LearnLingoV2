import css from "./MoreTeacherDetails.module.css";
import icons from "../../img/icons.svg";

export default function MoreTeacherDetails({
  teacher,
  theme,
  showMore,
  handleClick,
}) {
  return (
    <div className={css.container}>
      {!showMore ? (
        <button className={css.moreButton} onClick={handleClick}>
          Read more
        </button>
      ) : (
        <div className={css.textContainer}>
          <p className={css.text}>{teacher.experience}</p>
          <ul className={css.reviewList}>
            {teacher.reviews.map((review, index) => (
              <li className={css.review} key={index}>
                <div className={css.photoAndNameContainer}>
                  <div
                    className={css.reviewPhoto}
                    style={{ backgroundColor: theme.standart }}
                  >
                    {review.reviewer_name[0]}
                  </div>
                  <div className={css.nameAndRatingContainer}>
                    <span className={css.name}>{review.reviewer_name}</span>
                    <span className={css.rating}>
                      <svg className={css.starIcon}>
                        <use href={`${icons}#icon-star`} />
                      </svg>
                      {review.reviewer_rating}.0
                    </span>
                  </div>
                </div>
                <p className={css.reviewText}>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
