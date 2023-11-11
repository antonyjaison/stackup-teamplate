"use client";

import styles from "@styles/adddata.module.scss";
import { X, Plus, Trash } from "lucide-react";
import { useState, useEffect } from "react";
import { db } from "@firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";

const AddDataPopup = ({ isOpen, onClose, addTask, bgColor, data }) => {
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
        // console.log(auth.uid);
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
    data?.tasks.map((task) => {
      console.log(task.data.task);
    });

  const [pending, setPending] = useState([]);
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    let newPending = [];
    let newFinished = [];

    data?.tasks.forEach((task) => {
      if (task.data.completed) {
        newFinished.push(task);
      } else {
        newPending.push(task);
      }
    });

    setPending(newPending);
    setFinished(newFinished);
  }, [data]);

  return (
    <div className={styles.popup_container} onClick={onClose}>
      <div
        style={{ backgroundColor: bgColor }}
        className={`${styles.popup_content} ${styles.popup_content_data}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.title_input}>
          <h2>{data?.data?.title}</h2>
          <div className={styles.buttons}>
            <button>
              <Trash width={50} />
            </button>
            <button onClick={onClose}>
              <X width={60} />
            </button>
          </div>
        </div>
        {/* <hr color="#000" style={{ opacity: 0.4 }} /> */}

        <div className={styles.tasks}>
          <div className={styles.pending}>
            <div>
              <h3>Pending</h3>
              <div className={styles.pending_tasks}>
                {pending.map((task) => {
                  return (
                    <div className={styles.pend_task}>
                      <input type="checkbox" id={task?.id} />
                      <label htmlFor={task?.id}>-{task?.data.task}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            <form className={styles.add_task}>
              <input type="text" placeholder="- Add new task" />
              <div className={styles.add_button}>
                <input type="date" placeholder="Date" />
                <button type="submit">
                  <Plus width={30} />
                </button>
              </div>
            </form>
          </div>
          <div className={styles.line}></div>
          <div className={styles.completed}>
            <h3>Completed</h3>
            <div className={styles.completed_tasks}>
              {finished.map((task) => {
                return (
                  <div className={styles.pend_task}>
                    <input
                      type="checkbox"
                      id={task?.id}
                      checked={task?.data.completed}
                    />
                    <label htmlFor="ins">{task?.data.task}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDataPopup;
