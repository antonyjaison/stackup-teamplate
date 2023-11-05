import Link from "next/link";
import { ArrowBigRight, Calendar, LayoutList, Scroll } from "lucide-react";
import styles from "@styles/taskbutton.module.scss";

const TaskButton = ({ name, count, href }) => {
  const renderIcon = (name) => {
    switch (name) {
      case "Upcomming":
        return <ArrowBigRight size={20} />;
      case "Today":
        return <LayoutList size={18} />;
      case "Calender":
        return <Calendar size={18} />;
      case "Sticky walls":
        return <Scroll size={18} />;
    }
  };
  return (
    <Link href={href} className={styles.wrapper}>
      <div className={styles.left_section}>
        {renderIcon(name)}
        <p>{name}</p>
      </div>
      {count !== undefined && count !== null && count !== "" ? (
        <div className={styles.right_section}>{count}</div>
      ) : (
        ""
      )}
    </Link>
  );
};

export default TaskButton;
