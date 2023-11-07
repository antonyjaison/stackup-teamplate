import Tag from "./Tag";
import styles from "@styles/tags.module.scss";

const Tags = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Tags</h3>
      <div className={styles.tags_section}>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  );
};

export default Tags;
