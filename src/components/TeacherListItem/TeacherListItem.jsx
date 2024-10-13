import { useSelector } from "react-redux";
import css from "./TeacherListItem.module.css";
import { selectTheme } from "../../redux/helper/selectors";
import icons from "../../img/icons.svg";
import ItemTitle from "../ItemTitle/ItemTitle";
import TeacherDescription from "../TeacherDescription/TeacherDescription";
import MoreTeacherDetails from "../MoreTeacherDetails/MoreTeacherDetails";
import TeacherLevels from "../TeacherLevels/TeacherLevels";
import Button from "../Button/Button";
import { useState } from "react";
import OrderForm from "../OrderForm/OrderForm";

export default function TeacherListItem({ teacher, id }) {
  const theme = useSelector(selectTheme);
  const [showMore, setShowMore] = useState(false);
  const [modalState, setModalState] = useState(false);

  const handleClick = () => {
    setShowMore(true);
  };
  return (
    <>
      <div
        className={css.imageContainer}
        style={{ border: `3px solid ${theme.bright}` }}
      >
        <svg className={css.onlineIcon}>
          <use href={`${icons}#icon-online`} />
        </svg>
        <img
          className={css.image}
          src={teacher.avatar_url}
          alt={`${teacher.name}, ${teacher.surname}`}
        />
      </div>
      <div className={css.teacherData}>
        <ItemTitle teacher={teacher} icons={icons} theme={theme} id={id} />
        <div className={css.textContainer}>
          <TeacherDescription teacher={teacher} />
          <MoreTeacherDetails
            teacher={teacher}
            theme={theme}
            showMore={showMore}
            handleClick={handleClick}
          />
        </div>
        <TeacherLevels teacher={teacher} theme={theme} />
        <div className={css.button}>
          {showMore ? (
            <Button
              text={"Book trial lesson"}
              type={"button"}
              onClick={() => setModalState(true)}
              width={"232px"}
              height={"60px"}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <OrderForm
        teacher={teacher}
        modalState={modalState}
        setModalState={setModalState}
      />
    </>
  );
}
