import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";
import { authMeThunk } from "./AuthReducer";

let initialState = {
  autorizate: false,
};

/* export const authAppMeThunk = () => {
  (dispatch) => {
    return authAPI.authMe().then((respons) => {
      if (respons.data.resultCode === 0) {
        let { id, email, login } = respons.data.data;
        dispatch(isAuth(true));
      }
    });
  };
};
 */

export const authAppMeThunk = () => (dispatch) => {
  let promiseAuth = dispatch(authMeThunk());

  promiseAuth.then(() => {
    dispatch(isAuthAPP(true));
  });
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "isAuthAPP":
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

export const isAuthAPP = (isAuth) => ({
  type: "isAuthAPP",
  isAuth,
});

export default AppReducer;
