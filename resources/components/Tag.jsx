import styles from "@styles/tag.module.scss";

const Tag = () => {
  const lightModeColors = ["#FDE74C", "#5BC0EB", "#FA7921", "#9BC53D"];
  const darkModeColors = ["#0218b3", "#a43f14", "#0586de", "#643ac2"];


  return (
    <div className={styles.wrapper}>
      <p>#urgent</p>
    </div>
  );
};

export default Tag;
