import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

let MapStateToProps = (state) => {

    return {
        profileItems : state.Profile.ProfileItems

    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const ProfileContainer = connect(MapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;