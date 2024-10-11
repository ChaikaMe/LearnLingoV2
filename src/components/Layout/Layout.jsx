import { useState } from "react";
import AppBar from "../AppBar/AppBar";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function Layout({ children }) {
  const [modalRegState, setModalRegState] = useState(false);
  const [modalLogState, setModalLogState] = useState(false);

  return (
    <>
      <AppBar
        setModalRegState={setModalRegState}
        setModalLogState={setModalLogState}
      />
      <LoginForm modalState={modalLogState} setModalState={setModalLogState} />
      <RegisterForm
        modalState={modalRegState}
        setModalState={setModalRegState}
      />
      {children}
    </>
  );
}
