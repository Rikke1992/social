const Set_User_Profile = "SetUserProfile";
let initialState = {
  profils: { isFetching: true, user: null },
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetUserProfile":
      {
        let newState = { profils: { ...state.profils } };
        newState.profils.user = action.profile;

        return newState;
      }
      break;
    case "toogleFetching":
      {
        let newState = { ...state, profils: { ...state.profils } };
        newState.profils.isFetching = action.fetching;
        return newState;
      }

      break;
    default: {
      return state;
    }
  }
};

export const SetUserProfile = (profile) => ({
  type: "SetUserProfile",
  profile,
});
export const toogleFetching = (itemFetching) => ({
  type: "toogleFetching",
  fetching: itemFetching,
});

export default ProfileReducer;
