import { profileAPI } from "../API/api";

let initialState = {
  isFetching: true,
  status: "_",
  user: {
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
    },
    fullName: null,
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: { small: null, large: null },
    userId: null,
  },
};

export const profileGetStatusThunk = (userId) => {
  return (dispatch) => {
    dispatch(toogleFetching(true));
    profileAPI
      .profileGetStatus(userId)
      .then((respons) => {
        if (respons.status == 200) {
          dispatch(GetStatus(respons.data));
        } else {
          dispatch(GetStatus("status absent"));
        }
      })
      .then(() => dispatch(toogleFetching(false)));
  };
};

export const profilePutStatusThunk = (status) => {
  return (dispatch) => {
    dispatch(toogleFetching(true));
    profileAPI
      .profilePutStatus(status)
      .then((respons) => {
        if ((respons.data.status == 0 || 200) && respons.resultCode != 1) {
          dispatch(GetStatus(status));
        } else if (respons.resultCode == 1) {
          dispatch(GetStatus(respons.messages));
        } else {
          dispatch(GetStatus("status absent"));
        }
      })
      .then(() => dispatch(toogleFetching(false)));
  };
};

export const profileGetThunk = (userId) => {
  return (dispatch) => {
    /* if (!userId) {
      userId = 19743;
    } */
    dispatch(toogleFetching(true));
    profileAPI
      .profileGetUsers(userId)
      .then((response) => dispatch(SetProfile(response.data)))

      .then(() => dispatch(toogleFetching(false)));
  };
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GetStatus":
      {
        let newState = { ...state };
        newState.status = action.status;

        console.log("action>>>>>" + action.status);
        return newState;
      }
      break;
    case "SetProfile":
      {
        let newState = { ...state };
        newState.user = action.profile;

        return newState;
      }
      break;

    case "toogleFetching":
      {
        let newState = { ...state };
        newState.isFetching = action.itemFetching;
        return newState;
      }

      break;

    default: {
      return state;
    }
  }
};

export const PutStatus = (status) => {
  return {
    type: "PutStatus",
    status,
  };
};
export const GetStatus = (status) => {
  return {
    type: "GetStatus",
    status,
  };
};

export const toogleFetching = (itemFetching) => {
  return {
    type: "toogleFetching",
    itemFetching,
  };
};

export const SetProfile = (profile) => {
  return { type: "SetProfile", profile };
};
export default ProfileReducer;
