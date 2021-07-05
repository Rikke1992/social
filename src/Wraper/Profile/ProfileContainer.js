import React from "react";
import { connect } from "react-redux";
import ProfileClass from "./ProfileClass";

let MapStateToProps = (state) => {

  return {
    name: state.Profile.myProfile.name,
    photoLarge: state.Profile.myProfile.photos.large,
    followed: state.Profile.myProfile.followed,
    state: state
  }
};
let mapDispatchToProps = (dispatch) => {
  return {}
};

const ProfileContainer = connect(MapStateToProps, mapDispatchToProps)(ProfileClass);
export default ProfileContainer;