"use client";
import styles from "@styles/stickywall.module.scss";
import { Plus } from "lucide-react";
import AddDataPopup from "./AddDataPopup";
import { useState } from "react";

const StickyWall = ({ backgroundColor, addTask, data }) => {
  console.log(data)
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
        <AddDataPopup bgColor={backgroundColor} isOpen={dataPopupOpen} onClose={() => setDataPopupOpen(false)} addTask={true}/>
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
          <h3 className={styles.task_heading}>{data.data.title}</h3>
          <div className={styles.tasks}>
            {data.tasks.map(task => {
              return(
                <p>- {task.data.task}</p>
              )
            })}
          </div>
        </div>
        <AddDataPopup bgColor={backgroundColor} isOpen={updatePopup} onClose={() => setUpdatePopup(false)} addTask={false}/>
      </>
    );
};

export default StickyWall;
