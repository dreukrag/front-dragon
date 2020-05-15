import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./DragonDetailsForm.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import {
  EditDragonDetails,
  DeleteDragon,
  AddDragon,
  GetDragons,
} from "redux/DragonReducer";
import { Spinner } from "reactstrap";
const DragonDetailsForm = ({ close }) => {
  const selectedDragon = useSelector((state) => state.dragon.selectedDragon);
  const editDragonDetailsStatus = useSelector(
    (state) => state.dragon.editDragonDetailsStatus
  );
  const [editing, setEditing] = useState(false);
  const [changed, setChanged] = useState(false);
  const [dragonValues, setDragonValues] = useState({
    name: selectedDragon.name,
    type: selectedDragon.type,
    histories: selectedDragon.histories,
    imageUrl: selectedDragon.imageUrl,
  });

  const dispatch = useDispatch();
  let closeTimeout = null;

  useEffect(() => {
    if (selectedDragon.id === "addDragon") setEditing(true);
  }, [selectedDragon]);

  useEffect(() => {
    if (
      dragonValues.name !== selectedDragon.name ||
      dragonValues.type !== selectedDragon.type ||
      dragonValues.histories !== selectedDragon.histories ||
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

  const getDeleteProps = () => {
    if (selectedDragon.id === "addDragon") {
      return { style: { display: "none" } };
    } else return null;
  };

  const submit = () => {
    if (selectedDragon.id === "addDragon") dispatch(AddDragon(dragonValues));
    else dispatch(EditDragonDetails(selectedDragon.id, dragonValues));
  };

  const getContent = () => {
    switch (editDragonDetailsStatus) {
      case "INACTIVE":
        return (
          <div className={styles.main}>
            <div className={styles.topBar}>
              <div>
                <button onClick={() => setEditing(true)} {...getEditProps()}>
                  <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => submit()} {...getSaveProps()}>
                  <i className={["fas fa-save", styles.green].join(" ")}></i>
                </button>
                <button onClick={Reset} {...getCancelProps()}>
                  <i
                    className={["fas fa-times-circle", styles.red].join(" ")}
                  ></i>
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch(DeleteDragon(selectedDragon.id))}
                  {...getDeleteProps()}
                >
                  <i className="fas fa-trash"></i>
                </button>
                <button onClick={close}>
                  <i className="fas fa-window-close"></i>
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
      case "LOADING":
        return (
          <>
            <p>Working, please wait...</p>
            <p>
              <Spinner color="primary" />
            </p>
          </>
        );

      case "SUCCESS":
        clearTimeout(closeTimeout);
        closeTimeout = setTimeout(() => {
          console.log("SUCCESS");
          dispatch(GetDragons());
          close();
        }, 2000);
        return <p>Changes were saved successfully!</p>;

      case "SUCCESS_DELETE":
        console.log(closeTimeout);
        clearTimeout(closeTimeout);
        console.log(closeTimeout);
        closeTimeout = setTimeout(() => {
          console.log("SUCCESS_DELETE");
          dispatch(GetDragons());
          close();
        }, 2000);
        return <p>Dragon deleted successfully!</p>;

      case "SUCCESS_ADD":
        clearTimeout(closeTimeout);
        closeTimeout = setTimeout(() => {
          console.log("SUCCESS_ADD");
          dispatch(GetDragons());
          close();
        }, 2000);
        return <p>New Dragon added successfully!</p>;

      case "SERVER_FAILURE_DELETE":
        clearTimeout(closeTimeout);
        closeTimeout = setTimeout(() => {
          console.log("SERVER_FAILURE_DELETE");
          dispatch(GetDragons());
          close();
        }, 2000);
        return (
          <p>
            There was a problem while trying to slay the dragon, try again later
          </p>
        );

      default:
        clearTimeout(closeTimeout);
        closeTimeout = setTimeout(() => {
          console.log("DEFAULT");
          dispatch(GetDragons());
          close();
        }, 5000);

        const input = document.createElement("input");
        input.setAttribute(
          "value",
          `${dragonValues.name} | ${dragonValues.type} | ${dragonValues.histories} | ${dragonValues.imageUrl} |`
        );
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);

        return (
          <>
            <p>
              Something bad happened, but don't worry we saved everything to
              your clipboard!
            </p>
            <p>Try again later</p>
          </>
        );
    }
  };

  return getContent();
};

export default DragonDetailsForm;
