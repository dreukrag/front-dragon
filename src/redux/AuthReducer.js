export const loginStatuses = {
  INACTIVE: "INACTIVE",
  START: "START",
  SUCCESSFULL: "SUCCESSFULL",
  INVALID: "INVALID",
  SERVERERROR: "SERVERERROR",
}

const initialState = {
  isAuthenticated: false,
  loginLoading: false,
  loginStatus: "INACTIVE",
  errorMessage: null,
};

//Action creator
export const doLogin = (email, pw) => {
  return async (dispatch) => {
    dispatch({ type: "DO_LOGIN_START" });
    try {
      //Delay to simulate server delay
      await new Promise((resolve) => {
        setTimeout(resolve, 4000);
      });

      if (email === "test@gmail.com" && pw === "1234") {
        dispatch({ type: "DO_LOGIN_SUCCESS", payload: loginStatuses.SUCCESSFULL });
      } else {
        dispatch({
          type: "DO_LOGIN_FAILED",
          payload: { st: loginStatuses.INVALID, error: "Invalid login or password" },
        });
      }
    } catch (err) {
      dispatch({
        type: "DO_LOGIN_FAILED",
        payload: {
          st: loginStatuses.SERVERERROR,
          error: "There was an error while connecting to the server",
        },
      });
    }
  };
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "DO_LOGIN_START":
      return {
        ...state, //In case we add more variables later
        isAuthenticated: false,
        loginLoading: true,
        loginStatus: loginStatuses.START,
        errorMessage: null,
      };
    case "DO_LOGIN_SUCCESS":
      return {
        ...state, //In case we add more variables later
        isAuthenticated: true,
        loginLoading: false,
        loginStatus: action.payload,
        errorMessage: null,
      };
    case "DO_LOGIN_FAILED":
      return {
        ...state, //In case we add more variables later
        isAuthenticated: false,
        loginLoading: false,
        loginStatus: action.payload.st,
        errorMessage: action.payload.error,
      };
    default:
      return state;
  }
}

export default AuthReducer;
