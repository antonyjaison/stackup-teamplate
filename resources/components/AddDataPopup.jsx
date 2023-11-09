"use client";

import styles from "@styles/adddata.module.scss";
import { X, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { db } from "@firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";

const AddDataPopup = ({ isOpen, onClose, addTask, bgColor }) => {
  if (!isOpen) return null;

  if (addTask) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [task, setTask] = useState("");

    const auth = useSelector((state) => state.user.user);

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

    const handleSubmitTitle = async (e) => {
      e.preventDefault();
      if (taskTitle !== null && taskTitle !== "") {
        console.log(auth.uid);
        try {
          await addDoc(collection(db, "lists"), {
            title: taskTitle,
            createdBy: auth.uid,
          }).then((docRef) => {
            console.log(docRef.id);
          });
        } catch (err) {
          alert(err);
        }
      }
    };

    const handleSubmitTask = async (e) => {
      e.preventDefault();
      if (
        task !== null &&
        task !== "" &&
        taskDate !== null &&
        taskDate !== ""
      ) {
        try {
          await addDoc(collection(db, "tasks"), {
            task: task,
            duedate: taskDate,
            listId: "",
            tags: ["urgent", "important"],
            createdDate: Timestamp.now(),
          }).then((docRef) => {
            console.log(docRef.id);
          });
        } catch (err) {
          alert(err);
        }
      }
    };

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

          <form>
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
                <button type="submit" onClick={handleSubmitTask}>
                  <Plus width={30} />
                </button>
              </div>
            </div>
          </form>
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
