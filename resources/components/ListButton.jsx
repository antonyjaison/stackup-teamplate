import styles from "@styles/taskbutton.module.scss";

const ListButton = ({ name, count, color }) => {
    const squareColor = {
        backgroundColor: color
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_section}>
        <div style={squareColor} className={styles.square}></div>
        <p>{name}</p>
      </div>
      {count !== undefined && count !== null && count !== "" ? (
        <div className={styles.right_section}>{count}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ListButton;
