import styles from "@styles/lists.module.scss";
import ListButton from "./ListButton";
import { Plus } from "lucide-react";

const Lists = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Lists</h3>
      <div className={styles.task_buttons}>
        <ListButton name="Work" count="10" color="#FF6B6B" />
        <ListButton name="Personal" color="#65D9E8" />
        <ListButton name="Other" count="10" color="#FFD43A" />
        <div className={styles.new_list}>
          <Plus className="icon" size={22} />
          <p>Add New List</p>
        </div>
      </div>
    </div>
  );
};

export default Lists;
