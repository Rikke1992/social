export const ProfileSelector = (state) => {
  return state.Profile;
};

export const ProfileSelectorStatus = (state) => {
  return state.Profile.status;
};
export const ProfileSelectorAutorizedId = (state) => {
  return state.Auth.userID;
};
