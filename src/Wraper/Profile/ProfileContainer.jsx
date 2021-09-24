import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { withRouter } from "react-router-dom";
import PreloaderItem from "../../commond/Preloader";
import {
  profileComponentDidMountThunk,
  SetProfile,
  toogleFetching,
} from "../../Redux/ProfileReducer";
import Profile from "./Profile";
import { usersAPI } from "../../API/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    /* if (!userId) {
      userId = 19743;
    } */
    /* this.props.toogleFetching(true); */

    this.props.profileComponentDidMountThunk(userId);

    /*  usersAPI
      .profileComponentDidMount(userId)
      .then((response) => this.props.SetProfile(response.data));
    this.props.toogleFetching(false); */

    /*  axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => this.props.SetProfile(response.data));
    this.props.toogleFetching(false); */
  }
  render() {
    if (!this.props.Profile.isFetching) {
      return (
        <>
          <Profile {...this.props} />
        </>
      );
    } else {
      return <PreloaderItem />;
    }
  }
}

let MapStateToProps = (state) => {
  return { Profile: state.Profile };
};

export default connect(MapStateToProps, {
  SetProfile,
  toogleFetching,
  profileComponentDidMountThunk,
})(withRouter(ProfileContainer));
