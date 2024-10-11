import { useEffect } from "react";
import Auth from "../Auth/Auth";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import { auth } from "../../firebase";

export default function UserAuth({
  setModalRegState,
  setModalLogState,
  isLoggedIn,
  setIsLoggedIn,
}) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [setIsLoggedIn]);
  return (
    <>
      {isLoggedIn ? (
        <WelcomeUser />
      ) : (
        <Auth
          setModalRegState={setModalRegState}
          setModalLogState={setModalLogState}
        />
      )}
    </>
  );
}
