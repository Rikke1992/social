import { usersAPI } from "../API/api";

let initialState = {
  isFetching: true,
  status: null,
  user: {
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
    },
    fullName: "Vladimirp300",
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: { small: null, large: null },
    userId: 19743,
  },
};

export const profileComponentDidMountThunk = (userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = 19743;
    }
    dispatch(toogleFetching(true));
    usersAPI
      .profileComponentDidMount(userId)
      .then((response) => dispatch(SetProfile(response.data)))
      .then(() => dispatch(toogleFetching(false)));
  };
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
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

export const toogleFetching = (itemFetching) => {
  return {
    type: "toogleFetching",
    itemFetching,
  };
};

export const SetProfile = (profile) => {
  console.log("profile>>", profile);
  return { type: "SetProfile", profile };
};
export default ProfileReducer;
