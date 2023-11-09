"use client";
import StickyWalls from "@components/StickyWalls";
import styles from "@styles/dashboard.module.scss";
import { getFromLocalStorage } from "@utils/localstorage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUserLogin } from "@features/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const auth = getFromLocalStorage("data");

  useEffect(() => {
    dispatch(setUserLogin(auth));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <h3>Sticky Wall</h3>
        <p>{auth?.email}</p>
      </div>
      <StickyWalls />
    </div>
  );
};

export default Dashboard;
