"use client";

import React from "react";
import styles from "@styles/stickywalls.module.scss";
import StickyWall from "./StickyWall";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "@firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { addLists, addTasks } from "@features/taskSlice";

const StickyWalls = () => {
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.user.user);
  const listss = useSelector((state) => state.task.tasks);
  console.log(listss);
  const uid = auth?.uid;

  useEffect(() => {
    if (uid) {
      const fetchData = async () => {
        const listsRef = collection(db, "lists");
        const listsQuery = query(listsRef, where("createdBy", "==", uid));
        const querySnapshot = await getDocs(listsQuery);

        setLists(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );

        // tasks
        const taskQuery = query(collection(db, "tasks"));
        onSnapshot(taskQuery, (querySnapshot) => {
          setTasks(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      };
      fetchData();
    }
  }, [uid]);

  dispatch(addLists(lists));
  dispatch(addTasks(tasks));

  useEffect(() => {
    // Assuming 'lists' and 'tasks' are set from an API or other source
    const combinedArray = lists.map((list) => {
      const filteredTasks = tasks.filter(
        (task) => task.data.listId.trim() === list.id
      );
      return {
        ...list,
        tasks: filteredTasks,
      };
    });

    setCombinedData(combinedArray);
  }, [lists, tasks]);

  console.log(combinedData);

  // Array of hex colors
  const colors = [
    "#FFF65B",
    "#B4DE56",
    "#FA7921",
    "#E16008",
    "#8CB62E",
    "#E4CE33",
    "#FF8830",
    "#FDE74C",
    "#5BC0EB",
    "#6ACFFA",
    "#42A7D2",
    "#9BC53D",
    "#EED83D",
    "#74D9FF",
    "#4CB1DC",
    "#82AC24",
    "#EB6A12",
    "#AAD44C",
    "#FF923A",
    "#FFFF65",
  ];

  // Function to get the color for each StickyWall
  const getColor = (index) => colors[index % colors.length];

  const data = ["Social media", "Work", "Personal", "Important"];

  // Create an array of StickyWall components with unique colors
  const stickyWallComponents = combinedData.map((data, index) => (
    <StickyWall data={data} key={index} backgroundColor={getColor(index)} />
  ));

  return (
    <div className={styles.wrapper}>
      {stickyWallComponents}
      <StickyWall backgroundColor="#ebebeb" addTask={true} />
    </div>
  );
};

export default StickyWalls;
