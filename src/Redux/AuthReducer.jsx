import { authAPI } from "../API/api";

let initialState = {
  isAuth: false,
  user: null,
  email: null,
  userID: null,
};

export const authMeThunk = () => {
  return (dispatch) => {
    authAPI.authMe().then((respons) => {
      if (respons.data.resultCode === 0) {
        let { id, email, login } = respons.data.data;
        dispatch(SetUserData(id, email, login, true));
        dispatch(isAuth(true));
      }
    });
  };
};

export const loginThunk = (email, password, rememderMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememderMe).then((respons) => {
      if (respons.data.resultCode === 0) {
        dispatch(authMeThunk());
      }
    });
  };
};

export const logoutThunk = () => {
  return (dispatch) => {
    authAPI.logout().then((respons) => {
      if (respons.data.resultCode === 0) {
        dispatch(SetUserData(null, null, null, false));
      }
    });
  };
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetUserData":
      {
        let newState = { ...state, ...action.payload };

        return newState;
      }
      break;
    case "isAuth":
      {
        let newState = { ...state, isAuth: action.isAuth };

        return newState;
      }
      break;

    default: {
      return state;
    }
  }
};
export const SetUserData = (userID, email, login, isAuth) => ({
  type: "SetUserData",
  payload: { userID, email, login, isAuth },
});
export const isAuth = (isAuth) => ({
  type: "isAuth",
  isAuth,
});

export default AuthReducer;
