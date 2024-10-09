import { Fade, Modal } from "@mui/material";
import css from "./LoginForm.module.css";
import icons from "../../img/icons.svg";
import { useState } from "react";
import Button from "../Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const [modalState, setModalState] = useState(false);
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

  const onSubmit = async ({ email, password }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        return toast.error("Wrong password or email!");
      }
      return toast.error("Something went wrong! Please try again later");
    }
  };

  const schema = yup
    .object({
      email: yup.string().email("Must be a valid email").required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Modal open={modalState} onClose={modalClose} closeAfterTransition>
      <Fade in={modalState} timeout={150}>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <Toaster position="top-center" />
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
            <h1 className={css.title}>Log In</h1>
            <p className={css.text}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </p>
          </div>
          <ul className={css.inputList}>
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
          <Button text="Log In" type="submit" />
        </form>
      </Fade>
    </Modal>
  );
}
