import { useEffect, useState } from "react";
import css from "./FavouriteButton.module.css";
import { auth, db } from "../../firebase";
import toast, { Toaster } from "react-hot-toast";

export default function FavouriteButton({ icons, theme, id }) {
  const [favToggle, setFavToggle] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const favRef = db.ref(`users/${auth.currentUser.uid}`);
      favRef.once("value", (snapshot) => {
        const favIds = snapshot.val() || [];
        if (favIds.includes(id)) {
          setFavToggle(true);
        }
      });
    }
  }, [id, user]);

  const handleClick = () => {
    if (user) {
      const userRef = db.ref(`users/${auth.currentUser.uid}`);
      userRef.once("value", (snapshot) => {
        const data = snapshot.val() || [];
        const tempData = data.includes(id)
          ? data.filter((item) => item !== id)
          : [...data, id];
        userRef
          .set(tempData)
          .then(() => {
            toast.success("Updated favourites successfully!");
          })
          .catch((error) => {
            console.error("Error updating data: ", error);
            toast.error("Failed to update data!");
          });
      });
      if (favToggle) {
        return setFavToggle(false);
      }
      setFavToggle(true);
    } else {
      toast.error("This function is only for authorised users!");
    }
  };
  return (
    <button className={css.favouriteButton} onClick={handleClick}>
      <Toaster position="top right" />
      <svg className={css.heartIcon}>
        <use
          href={`${icons}#icon-heart`}
          style={
            favToggle
              ? { fill: theme.standart, stroke: theme.standart }
              : { fill: "transparent", stroke: "var(--main)" }
          }
        />
      </svg>
    </button>
  );
}
