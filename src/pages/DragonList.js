import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDragons, GetDragonDetails } from "redux/DragonReducer";
import DragonTile from "components/DragonTile";
import styles from "./DragonList.module.scss";
import { Spinner, ModalBody } from "reactstrap";
import CenteredModal from "components/CenteredModal";
import { IconError } from "components";
import DragonDetailsForm from "components/DragonDetailsForm";

const MB = ({ children, ...rest }) => (
  <ModalBody
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontSize: "24px",
    }}
    {...rest}
  >
    {children}
  </ModalBody>
);

const DragonList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragon.dragons);
  const dragonDetailsStatus = useSelector(
    (state) => state.dragon.dragonDetailsStatus
  );

  useEffect(() => {
    dispatch(GetDragons());
  }, [dispatch]);

  const getModalContent = () => {
    switch (dragonDetailsStatus) {
      case "LOADING":
        return <Spinner color="primary" />;
      case "SUCCESS":
        return <DragonDetailsForm close={() => dispatch({ type: "DESELECT_DRAGON" })}/>;
      case "NO_INFO":
        return (
          <p>We couldn't find any aditional information on the dragon :(</p>
        );
      case "SERVER_FAILURE":
        return (
          <>
            <p>
              <IconError />
            </p>
            <p>
              There was an error while communicating with the server, try again
              later.
            </p>
          </>
        );
      default:
        return null;
    }
  };
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
            onClick={() => dispatch(GetDragonDetails(id))}
          />
        ))}
      </div>
      <CenteredModal
        isOpen={dragonDetailsStatus !== "INACTIVE"}
        backdrop={true}
        keyboard={true}
        toggle={() => dispatch({ type: "DESELECT_DRAGON" })}
      >
        <MB>{getModalContent()}</MB>
      </CenteredModal>
    </div>
  );
};

export default DragonList;
