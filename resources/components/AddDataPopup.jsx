import styles from "@styles/adddata.module.scss";
import { X, Plus, Trash } from "lucide-react";

const AddDataPopup = ({ isOpen, onClose, addTask, bgColor }) => {
  if (!isOpen) return null;

  if (addTask) {
    return (
      <div className={styles.popup_container} onClick={onClose}>
        <div
          style={{ backgroundColor: bgColor }}
          className={styles.popup_content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.title_input}>
            <input type="text" placeholder="Title" />
            <button onClick={onClose}>
              <X width={50} />
            </button>
          </div>
          <hr color="#000" style={{ opacity: 0.4 }} />

          <div className={styles.add_task}>
            <input type="text" placeholder="- Add task" />
            <div className={styles.add_button}>
              <input type="date" placeholder="Date" />
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
