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
        dispatch(SetUserData(id, email, login));
        dispatch(isAuth(true));
      }
    });
  };
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetUserData":
      {
        let newState = { ...state, ...action.data };

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
export const SetUserData = (userID, email, login) => ({
  type: "SetUserData",
  data: { userID, email, login },
});
export const isAuth = (isAuth) => ({
  type: "isAuth",
  isAuth,
});

export default AuthReducer;
