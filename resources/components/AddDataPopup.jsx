"use client";

import styles from "@styles/adddata.module.scss";
import { X, Plus, Trash } from "lucide-react";
import { useState } from "react";
// import { db } from "@firebase/config";
// import {collection, addDoc, Timestamp} from 'firebase/firestore'

const AddDataPopup = ({ isOpen, onClose, addTask, bgColor }) => {
  if (!isOpen) return null;

  if (addTask) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [task, setTask] = useState("");

    // functions for adding task
    const handleTaskTitle = (e) => {
      setTaskTitle(e.target.value);
    };
    const handleTaskDate = (e) => {
      setTaskDate(e.target.value);
    };
    const handleTask = (e) => {
      setTask(e.target.value);
    };

    const handleSubmitTitle = (e) => {
      e.preventDefault();
      if (taskTitle !== null && taskTitle !== "") {
        console.log(taskTitle);
      }
    }

    return (
      <div className={styles.popup_container} onClick={onClose}>
        <div
          style={{ backgroundColor: bgColor }}
          className={styles.popup_content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.title_input}>
            <form onSubmit={handleSubmitTitle}>
              <input
                type="text"
                value={taskTitle}
                onChange={handleTaskTitle}
                placeholder="Title"
              />
            </form>
            <button onClick={onClose}>
              <X width={50} />
            </button>
          </div>
          <hr color="#000" style={{ opacity: 0.4 }} />

          <div className={styles.add_task}>
            <input
              type="text"
              placeholder="- Add task"
              value={task}
              onChange={handleTask}
            />
            <div className={styles.add_button}>
              <input
                type="date"
                placeholder="Date"
                value={taskDate}
                onChange={handleTaskDate}
              />
              <button>
                <Plus width={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className={styles.popup_container} onClick={onClose}>
        <div
          style={{ backgroundColor: bgColor }}
          className={styles.popup_content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.title_input}>
            <h2>Social Media</h2>
            <button>
              <Trash width={50} />
            </button>
          </div>
          <hr color="#000" style={{ opacity: 0.4 }} />

          <div className={styles.tasks}>
            <div className={styles.pending}>
              <div className={styles.task}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={styles.task}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={styles.task}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={styles.task}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={styles.task}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={styles.task}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={styles.task}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
            </div>

            <div className={styles.completed}>
              <h4>Finished</h4>
              <div className={`${styles.task} ${styles.completed_task}`}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={`${styles.task} ${styles.completed_task}`}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={`${styles.task} ${styles.completed_task}`}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={`${styles.task} ${styles.completed_task}`}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
              <div className={`${styles.task} ${styles.completed_task}`}>
                <input id="ins" type="checkbox" />
                <label htmlFor="ins">Post on Instagram</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddDataPopup;
