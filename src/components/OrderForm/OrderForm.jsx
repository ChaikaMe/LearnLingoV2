import css from "./OrderForm.module.css";
import * as yup from "yup";
import { Fade, FormControlLabel, Modal, RadioGroup } from "@mui/material";
import icons from "../../img/icons.svg";
import Button from "../Button/Button";
import BpRadio from "../StyledRadio/StyledRadio";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function OrderForm({ teacher, modalState, setModalState }) {
  const modalClose = () => {
    setModalState(false);
  };
  const onSubmit = () => {
    toast.success("The booking has been completed");
    modalClose();
    reset({
      name: "",
      email: "",
      tel: "",
    });
  };
  const schema = yup.object().shape({
    reason: yup.string().required("Required!"),
    name: yup
      .string()
      .min(3, "Must be at least 3 characters long")
      .required("Required!"),
    email: yup.string().email("Must be a valid email").required("Required!"),
    tel: yup
      .string()
      .matches(/^\+?[0-9\s\-()]{7,}$/)
      .min(7, "Must be at least 7 characters long")
      .required("Required!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Modal open={modalState} onClose={modalClose} closeAfterTransition>
      <Fade in={modalState} timeout={150}>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <button
            className={css.closeButton}
            type="button"
            onClick={modalClose}
          >
            <svg className={css.closeIcon}>
              <use href={`${icons}#icon-x`} />
            </svg>
          </button>
          <div className={css.topSection}>
            <h1 className={css.title}>Book trial lesson</h1>
            <p className={css.text}>
              Our experienced tutor will assess your current language level,
              discuss your learning goals, and tailor the lesson to your
              specific needs.
            </p>
            <div className={css.teacherContainer}>
              <img
                className={css.image}
                src={teacher.avatar_url}
                alt={`${teacher.name} ${teacher.surname}`}
              />
              <div className={css.teacherDetail}>
                <span className={css.yourTeacher}>Your teacher</span>
                <span
                  className={css.teacherName}
                >{`${teacher.name} ${teacher.surname}`}</span>
              </div>
            </div>
          </div>
          <div className={css.middleSection}>
            <h2 className={css.radioTitle}>
              What is your main reason for learning English?
            </h2>
            <RadioGroup
              defaultValue="1"
              name="radio-buttons-group"
              required
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              {...register("reason")}
            >
              <FormControlLabel
                value="1"
                control={<BpRadio />}
                label="Career and business"
              />
              <FormControlLabel
                value="2"
                control={<BpRadio />}
                label="Lesson for kids"
              />
              <FormControlLabel
                value="3"
                control={<BpRadio />}
                label="Living abroad"
              />
              <FormControlLabel
                value="4"
                control={<BpRadio />}
                label="Exams and coursework"
              />
              <FormControlLabel
                value="5"
                control={<BpRadio />}
                label="Culture, travel or hobby"
              />
            </RadioGroup>
          </div>
          <div className={css.bottomSection}>
            <div className={css.inputContainer}>
              <input
                className={css.input}
                type="text"
                placeholder="Full Name"
                required
                {...register("name")}
              />
              {errors.name && (
                <p className={css.errorMessage}>{errors.name.message}!</p>
              )}
            </div>
            <div className={css.inputContainer}>
              <input
                className={css.input}
                type="email"
                placeholder="Email"
                required
                {...register("email")}
              />
              {errors.email && (
                <p className={css.errorMessage}>{errors.email.message}!</p>
              )}
            </div>
            <div className={css.inputContainer}>
              <input
                className={css.input}
                type="tel"
                placeholder="Phone number"
                required
                {...register("tel")}
              />
              {errors.tel && (
                <p className={css.errorMessage}>{errors.tel.message}!</p>
              )}
            </div>
          </div>
          <div className={css.button}>
            <Button text={"Book"} type={"submit"} />
          </div>
        </form>
      </Fade>
    </Modal>
  );
}
