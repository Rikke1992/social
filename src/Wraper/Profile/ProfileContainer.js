import React from "react";
import { connect } from "react-redux";

let MapStateToProps = (state) => {
    
    return {
      state
    }
};

const ProfileContainer = connect(MapStateToProps, { toogleFetching, setCurrentPage, setUsers })(Profile);
export default ProfileContainer;