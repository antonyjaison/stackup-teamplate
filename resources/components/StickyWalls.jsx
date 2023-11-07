import React from "react";
import styles from "@styles/stickywalls.module.scss";
import StickyWall from "./StickyWall";

const StickyWalls = () => {
  // Array of hex colors
  const colors = [
    "#FFF65B", "#B4DE56", "#FA7921", "#E16008", "#8CB62E", "#E4CE33",
    "#FF8830", "#FDE74C", "#5BC0EB", "#6ACFFA", "#42A7D2", "#9BC53D",
    "#EED83D", "#74D9FF", "#4CB1DC", "#82AC24", "#EB6A12", "#AAD44C",
    "#FF923A", "#FFFF65"
  ];
  

  // Function to get the color for each StickyWall
  const getColor = (index) => colors[index % colors.length];

  const data = ["Social media", "Work", "Personal", "Important"]

  // Create an array of StickyWall components with unique colors
  const stickyWallComponents = data.map((_, index) => (
    <StickyWall key={index} backgroundColor={getColor(index)} />
  ));

  return <div className={styles.wrapper}>
    {stickyWallComponents}
    <StickyWall backgroundColor="#ebebeb" addTask={true}/>
  </div>;
};

export default StickyWalls;
