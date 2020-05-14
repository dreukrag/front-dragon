import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDragons, SelectDragon } from "redux/DragonReducer";
import DragonTile from "components/DragonTile";
import styles from "./DragonList.module.scss";
const DragonList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragon.dragons);
  useEffect(() => {
    dispatch(GetDragons());
  }, [dispatch]);
  return (
    <div>
      <h1>Welcome to the dragon codex!</h1>
      <h5>You'll can find all the information about dragons below!</h5>
      <div className={styles.list}>
        {dragons.map(({ id, name, type, imageUrl }) => (
          <DragonTile
            id={id}
            name={name}
            type={type}
            image={imageUrl}
            onClick={() => dispatch({ type: "SELECT_DRAGON", payload: id })}
          />
        ))}
      </div>
    </div>
  );
};

export default DragonList;
