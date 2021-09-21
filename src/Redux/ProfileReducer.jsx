let initialState = {
  isFetching: true,
  user: null,
};

const ProfileReducer = (state = initialState, action) => {
  console.log("ProfileReducer", action);
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
  console.log("itemFetching>>", itemFetching);
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
