import { Fade, Modal } from "@mui/material";
import css from "./RegisterForm.module.css";
import icons from "../../img/icons.svg";
import { useState } from "react";
import Button from "../Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

export default function RegisterForm({ modalState, setModalState }) {
  const [hidePwd, setHidePwd] = useState(false);

  const modalClose = () => {
    setModalState(false);
  };
  const pwdVisibilityToggle = () => {
    if (hidePwd) {
      return setHidePwd(false);
    }
    return setHidePwd(true);
  };

  const onSubmit = async ({ name, email, password }) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await userCredential.user.updateProfile({
        displayName: name,
      });
      setModalState(false);
      reset({
        email: "",
        password: "",
        name: "",
      });
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        return toast.error("This email is already in use!");
      }
      return toast.error("Something went wrong! Please try again later");
    }
  };

  const schema = yup
    .object({
      name: yup
        .string()
        .min(3, "Must be at least 3 characters long")
        .required(),
      email: yup.string().email("Must be a valid email").required(),
      password: yup.string().required(),
    })
    .required();

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
          <div className={css.description}>
            <h1 className={css.title}>Registration</h1>
            <p className={css.text}>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information
            </p>
          </div>
          <ul className={css.inputList}>
            <li className={css.inputItem}>
              <input
                className={css.input}
                placeholder="Name"
                {...register("name")}
                autoComplete="off"
              />
              {errors.name && (
                <p className={css.errorMessage}>{errors.name.message}!</p>
              )}
            </li>
            <li className={css.inputItem}>
              <input
                className={css.input}
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className={css.errorMessage}>{errors.email.message}!</p>
              )}
            </li>
            <li className={css.inputItem}>
              <input
                className={css.input}
                placeholder="Password"
                type={`${hidePwd ? "text" : "password"}`}
                {...register("password")}
              />
              <svg className={css.eyeIcon} onClick={pwdVisibilityToggle}>
                <use
                  href={hidePwd ? `${icons}#icon-eye` : `${icons}#icon-eye-off`}
                />
              </svg>
              {errors.password && <p className={css.errorMessage}>Required!</p>}
            </li>
          </ul>
          <div className={css.button}></div>
          <Button text="Sign Up" type="submit" />
        </form>
      </Fade>
    </Modal>
  );
}
