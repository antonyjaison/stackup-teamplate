"use client";
import styles from "@styles/stickywall.module.scss";
import { Plus } from "lucide-react";
import AddDataPopup from "./AddDataPopup";
import { useState } from "react";

const StickyWall = ({ backgroundColor, addTask }) => {
  const [dataPopupOpen, setDataPopupOpen] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false)

  if (addTask) {
    return (
      <>
        <div
          style={{ backgroundColor: backgroundColor }}
          className={`${styles.wrapper} ${styles.add_task}`}
          onClick={() => setDataPopupOpen(true)}
        >
          <Plus size={50} />
        </div>
        <AddDataPopup isOpen={dataPopupOpen} onClose={() => setDataPopupOpen(false)} addTask={true}/>
      </>
    );
  } else
    return (
      <>
        <div
          style={{ backgroundColor: backgroundColor }}
          className={styles.wrapper}
          onClick={() => setUpdatePopup(true)}
        >
          <h3 className={styles.task_heading}>Social media</h3>
          <div className={styles.tasks}>
            <p>- plan a socicl media content</p>
            <p>- plan socicl content</p>
            <p>- plan a socicl media content</p>
            <p>- plan a socicl</p>
            <p>- plan a socicl media content</p>
          </div>
        </div>
        <AddDataPopup isOpen={updatePopup} onClose={() => setUpdatePopup(false)} addTask={false}/>
      </>
    );
};

export default StickyWall;
