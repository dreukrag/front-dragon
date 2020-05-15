import React from "react";
import styles from "./AddDragonTile.module.scss";

const AddDragonTile = ({onClick}) => (
  <div className={styles.tile} key="addDragon" onClick={onClick}>
    <i className="fas fa-plus"></i>
  </div>
);

export default AddDragonTile;
