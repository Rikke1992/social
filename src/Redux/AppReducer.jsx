import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

let initialState = {
  autorizate: false,
};

export const authAppMeThunk = () => {
  return (dispatch) => {
    return authAPI.authMe().then((respons) => {
      if (respons.data.resultCode === 0) {
        let { id, email, login } = respons.data.data;
        dispatch(isAuth(true));
      }
    });
  };
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "isAuth":
      {
        let newState = { ...state, autorizate: action.isAuth };

        return newState;
      }
      break;

    default: {
      return state;
    }
  }
};

export const isAuth = (isAuth) => ({
  type: "isAuth",
  isAuth,
});

export default AppReducer;
