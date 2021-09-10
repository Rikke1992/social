import React from "react";
import { connect } from "react-redux";
import ProfileClass from "./ProfileClass";
import SetUserProfile from "./../../Redux/ProfileReducer";

let MapStateToProps = (state) => {

  return {
    name: state.Profile.myProfile.name,
    photoLarge: state.Profile.myProfile.photos.large,
    followed: state.Profile.myProfile.followed,
    profils: state.Profile.profils,
    state: state
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    SetUserProfile: (users) => {

      dispatch({ type: 'SetUserProfile', users })

    }
  }
};

const ProfileContainer = connect(MapStateToProps, mapDispatchToProps)(ProfileClass);

export default ProfileContainer;