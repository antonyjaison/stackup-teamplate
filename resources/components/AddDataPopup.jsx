import styles from "@styles/adddata.module.scss";

const AddDataPopup = ({ isOpen, onClose, addTask }) => {
  if (!isOpen) return null;

  if (addTask) {
    return (
      <div className={styles.popup_container} onClick={onClose}>
        <div
          className={styles.popup_content}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Popup Title</h2>
          <p>ADD DATA.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  } else
    return (
      <div className={styles.popup_container} onClick={onClose}>
        <div
          className={styles.popup_content}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Popup Title</h2>
          <p>This is a popup component.</p>
          <button onClick={onClose}>Close</button>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptates, labore libero, veniam iusto
        </div>
      </div>
    );
};

export default AddDataPopup;
