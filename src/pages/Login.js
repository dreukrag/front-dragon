import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { doLogin, loginStatuses } from "redux/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button, ModalBody, ModalFooter } from "reactstrap";
import { IconError, IconSuccess } from "components";
import { useHistory } from "react-router-dom";
import CenteredModal from "components/CenteredModal";

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
const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const status = useSelector((state) => state.auth.loginStatus);
  const error = useSelector((state) => state.auth.errorMessage);
  let history = useHistory();
  const dispatch = useDispatch();

  const toggle = () => {
    setModalOpen((prev) => !prev);
  };
  useEffect(() => {
    if (status === "INACTIVE") setModalOpen(false);
    else setModalOpen(true);
  }, [status]);

  const submit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pw = e.target.password.value;
    dispatch(doLogin(email, pw));
  };

  const getModalContent = (st = status) => {
    switch (st) {
      case loginStatuses.START:
        return (
          <>
            <MB>
              <Spinner color="primary" />
            </MB>
          </>
        );
      case loginStatuses.SUCCESSFULL:
        setTimeout(() => history.push("/list"), 2000);
        return (
          <>
            <MB>
              <p>
                <IconSuccess />
              </p>
              <p>Login Successfull! </p>
              <p> Redirecting you to the Dragon list in a few moments</p>
            </MB>
          </>
        );
      case loginStatuses.INVALID:
        return (
          <>
            <MB>
              <p>
                <IconError />
              </p>
              <p>{error}</p>
            </MB>
            <ModalFooter>
              <Button onClick={toggle}>Ok</Button>
            </ModalFooter>
          </>
        );
      case loginStatuses.SERVERERROR:
        return (
          <>
            <MB
              style={{
                displayt: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>
                <IconError />
              </p>
              <p>{error}</p>
            </MB>
            <ModalFooter>
              <Button onClick={toggle}>Ok</Button>
            </ModalFooter>
          </>
        );
      default:
        return (
          <>
            <MB>
              <Spinner color="primary" />
            </MB>
            <ModalFooter></ModalFooter>
          </>
        );
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-dark" type="submit">
            Login
          </button>
        </div>
      </form>
      <CenteredModal
        isOpen={isModalOpen}
        backdrop="static"
        keyboard={true}
      >
        {getModalContent()}
      </CenteredModal>
    </div>
  );
};

export default Login;
