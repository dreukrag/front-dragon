import Axios from "axios";

const initialState = {
  dragons: [],
  selectedDragon: null,
  dragonsStatus: "INACTIVE",
  dragonDetailsStatus: "INACTIVE",
  editDragonDetailsStatus: "INACTIVE",
};

//Action creator for getting the dragons
export const GetDragons = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_DRAGONS_START" });
    try {
      //Simulate server delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const response = await Axios.get(
        "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
      );

      if (response.status === 200) {
        dispatch({ type: "GET_DRAGONS_SUCCESS", payload: response.data });
        if (response.data.length === 0) {
          dispatch({ type: "GET_DRAGONS_NO_DRAGONS" });
        }
      }
    } catch (err) {
      console.log(err);

      dispatch({ type: "GET_DRAGONS_SERVER_FAILURE" });
    }
  };
};

//Action creator for getting the dragon details
export const GetDragonDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: "GET_DRAGON_DETAILS_START" });

    //If we are adding a dragon we simply forward an empty dragon
    //the user can then edit and save it.
    if (id === "addDragon")
      return dispatch({
        type: "GET_DRAGON_DETAILS_SUCCESS",
        payload: {
          name: "",
          histories: "",
          type: "",
          imageUrl: "",
          id: "addDragon",
        },
      });

    try {
      //Simulate server delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      const response = await Axios.get(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`
      );

      if (response.status === 200) {
        dispatch({
          type: "GET_DRAGON_DETAILS_SUCCESS",
          payload: response.data,
        });
        if (response.data.length === 0) {
          dispatch({ type: "GET_DRAGON_DETAILS_NO_DRAGONS" });
        }
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "GET_DRAGON_DETAILS_SERVER_FAILURE" });
    }
  };
};

//Action creator for editing the dragon details
export const EditDragonDetails = (id, dt) => {
  const data = {
    ...dt,
    createdAt: new Date(),
  };
  return async (dispatch) => {
    dispatch({ type: "EDIT_DRAGON_DETAILS_START" });
    try {
      //Simulate server delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      const response = await Axios.put(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`,
        data
      );

      if (response.status === 200) {
        dispatch({
          type: "EDIT_DRAGON_DETAILS_SUCCESS",
          payload: response.data,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "EDIT_DRAGON_DETAILS_SERVER_FAILURE" });
    }
  };
};

//Action creator for adding a dragon
export const AddDragon = (dt) => {
  const data = {
    ...dt,
    createdAt: new Date(),
  };

  return async (dispatch) => {
    dispatch({ type: "ADD_DRAGON_START" });
    try {
      //Simulate server delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      const response = await Axios.post(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`,
        data
      );

      if (response.status === 201) {
        dispatch({
          type: "ADD_DRAGON_SUCCESS",
          payload: response.data,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "ADD_DRAGON_SERVER_FAILURE" });
    }
  };
};

//Action creator for deleting the dragon details
export const DeleteDragon = (id) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_DRAGON_START" });
    try {
      //Simulate server delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      const response = await Axios.delete(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`
      );

      if (response.status === 200) {
        dispatch({
          type: "DELETE_DRAGON_SUCCESS",
          payload: response.data,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "DELETE_DRAGON_SERVER_FAILURE" });
    }
  };
};

function DragonReducer(state = initialState, action) {
  switch (action.type) {
    //Getting dragons
    case "GET_DRAGONS_START":
      return {
        ...state,
        dragonsStatus: "LOADING",
      };
    case "GET_DRAGONS_SUCCESS":
      return {
        ...state,
        dragonsStatus: "SUCCESS",
        dragons: action.payload,
      };
    case "GET_DRAGONS_NO_DRAGONS":
      return {
        ...state,
        dragonsStatus: "NO_DRAGONS",
      };
    case "GET_DRAGONS_SERVER_FAILURE":
      return {
        ...state,
        dragonsStatus: "SERVER_FAILURE",
      };

    //Getting a dragons detail
    case "GET_DRAGON_DETAILS_START":
      return {
        ...state,
        dragonDetailsStatus: "LOADING",
      };
    case "GET_DRAGON_DETAILS_SUCCESS":
      return {
        ...state,
        dragonDetailsStatus: "SUCCESS",
        selectedDragon: action.payload,
      };
    case "GET_DRAGON_DETAILS_NO_DRAGONS":
      return {
        ...state,
        dragonDetailsStatus: "NO_INFO",
      };
    case "GET_DRAGON_DETAILS_SERVER_FAILURE":
      return {
        ...state,
        dragonDetailsStatus: "SERVER_FAILURE",
      };
    case "DESELECT_DRAGON":
      return {
        ...state,
        dragonDetailsStatus: "INACTIVE",
        selectedDragon: null,
      };

    //Editing a dragons detail
    case "EDIT_DRAGON_DETAILS_START":
      return {
        ...state,
        editDragonDetailsStatus: "LOADING",
      };
    case "EDIT_DRAGON_DETAILS_SUCCESS":
      return {
        ...state,
        editDragonDetailsStatus: "SUCCESS",
        selectedDragon: action.payload,
      };
    case "EDIT_DRAGON_DETAILS_SERVER_FAILURE":
      return {
        ...state,
        editDragonDetailsStatus: "SERVER_FAILURE",
      };

    case "DELETE_DRAGON_START":
      return {
        ...state,
        editDragonDetailsStatus: "LOADING",
      };
    case "DELETE_DRAGON_SUCCESS":
      return {
        ...state,
        editDragonDetailsStatus: "SUCCESS_DELETE",
        selectedDragon: action.payload,
      };
    case "DELETE_DRAGON_SERVER_FAILURE":
      return {
        ...state,
        editDragonDetailsStatus: "SERVER_FAILURE_DELETE",
      };

      case "ADD_DRAGON_START":
      return {
        ...state,
        editDragonDetailsStatus: "LOADING",
      };
    case "ADD_DRAGON_SUCCESS":
      return {
        ...state,
        editDragonDetailsStatus: "SUCCESS_ADD",
        selectedDragon: action.payload,
      };
    case "ADD_DRAGON_SERVER_FAILURE":
      return {
        ...state,
        editDragonDetailsStatus: "SERVER_FAILURE_ADD",
      };

    default:
      return state;
  }
}

export default DragonReducer;
