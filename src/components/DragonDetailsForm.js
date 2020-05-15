import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./DragonDetailsForm.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { EditDragonDetails } from "redux/DragonReducer";
const DragonDetailsForm = ({ close }) => {
  const selectedDragon = useSelector((state) => state.dragon.selectedDragon);
  const [editing, setEditing] = useState(false);
  const [changed, setChanged] = useState(false);
  const [dragonValues, setDragonValues] = useState({
    name: selectedDragon.name,
    type: selectedDragon.type,
    histories: selectedDragon.histories,
    imageUrl: selectedDragon.imageUrl,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      dragonValues.name !== selectedDragon.name ||
      dragonValues.type !== selectedDragon.type ||
      dragonValues.histories !== selectedDragon.histories||
      dragonValues.imageUrl !== selectedDragon.imageUrl
    )
      setChanged(true);
    //selectedDragon.history, selectedDragon.name, selectedDragon.type not included because if the API updates we do not want to override those changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragonValues]);

  const Reset = () => {
    setDragonValues({
      name: selectedDragon.name,
      type: selectedDragon.type,
      histories: selectedDragon.histories,
      imageUrl: selectedDragon.imageUrl,
    });
    setEditing(false);
  };

  const changedValue = (e) => {
    const n = e.target.name;
    const v = e.target.value;
    setDragonValues((old) => ({ ...old, [n]: v }));
  };

  const getSaveProps = () => {
    if (changed && editing) {
      return null;
    } else if (editing && !changed) {
      return {
        disabled: true,
      };
    } else if (!editing) {
      return {
        style: { display: "none" },
      };
    }
  };

  const getCancelProps = () => {
    if (changed && editing) {
      return null;
    } else if (editing && !changed) {
      return {
        disabled: true,
      };
    } else if (!editing) {
      return {
        style: { display: "none" },
      };
    }
  };

  const getEditProps = () => {
    if (editing) {
      return { style: { display: "none" } };
    } else return null;
  };

  return (
    <div className={styles.main}>
      <div className={styles.topBar}>
        <div>
          <button onClick={() => setEditing(true)} {...getEditProps()}>
            <i class="fas fa-edit"></i>
          </button>
          <button onClick={() => dispatch(EditDragonDetails(selectedDragon.id ,dragonValues))} {...getSaveProps()}>
            <i className={["fas fa-save", styles.green].join(" ")}></i>
          </button>
          <button onClick={Reset} {...getCancelProps()}>
            <i className={["fas fa-times-circle", styles.red].join(" ")}></i>
          </button>
        </div>
        <div>
          <button onClick={close}>
            <i class="fas fa-window-close"></i>
          </button>
        </div>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={dragonValues.name}
          disabled={!editing}
          onChange={(e) => changedValue(e)}
        />
      </div>
      <div className="form-group">
        <label>Type</label>
        <input
          className="form-control"
          type="text"
          name="type"
          value={dragonValues.type}
          disabled={!editing}
          onChange={(e) => changedValue(e)}
        />
      </div>
      <div className="form-group">
        <label>History</label>
        <textarea
          className="form-control"
          type="text"
          name="histories"
          value={dragonValues.histories}
          disabled={!editing}
          onChange={(e) => changedValue(e)}
        />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          className="form-control"
          type="text"
          name="imageUrl"
          value={dragonValues.imageUrl}
          disabled={!editing}
          onChange={(e) => changedValue(e)}
        />
      </div>
    </div>
  );
};

export default DragonDetailsForm;
