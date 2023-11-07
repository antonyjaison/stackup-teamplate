import Tag from "./Tag";
import styles from "@styles/tags.module.scss";

const Tags = () => {
  const tags = ["urgent", "work", "personal", "important"];
  return (
    <div className={styles.wrapper}>
      <h3>Tags</h3>
      <div className={styles.tags_section}>
        {tags.map(tag => {
          return <Tag name={tag} />;
        })}
      </div>
    </div>
  );
};

export default Tags;
