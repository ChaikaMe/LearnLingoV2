import { Fade, Modal } from "@mui/material";
import css from "./LoginForm.module.css";
import icons from "../../img/icons.svg";
import { useState } from "react";
import Button from "../Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [modalState, setModalState] = useState(true);
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

  const onSubmit = (data) => {
    console.log(data);
  };

  const schema = yup
    .object({
      email: yup.string().email().required(),
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
          <div className={css.inputContainer}>
            <input
              className={css.input}
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <p className={css.errorMessage}>Required!</p>}
          </div>
          <div className={css.inputContainer}>
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
          </div>
          <Button text="Log In" type="submit" />
        </form>
      </Fade>
    </Modal>
  );
}
