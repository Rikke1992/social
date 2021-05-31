import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

let MapStateToProps = (state) => {

    return {
        profileItems: state.Profile.ProfileItems,
        Profile: state.Profile,
        // postValue: state.Profile.postValue

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (value) => {

            dispatch({ type: "change", value: value })

        },

        Newtext: () => {

            dispatch({ type: 'click' })
        },
        setUsers: (newState) => {
            dispatch({ type: 'setUsers', newState: newState })
        }

    }
};

const ProfileContainer = connect(MapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;