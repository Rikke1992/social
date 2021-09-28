import React, { Profiler } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import PreloaderItem from "../../commond/Preloader";
import {
  profileComponentDidMountThunk,
  SetProfile,
  toogleFetching,
} from "../../Redux/ProfileReducer";
import Profile from "./Profile";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    this.props.profileComponentDidMountThunk(userId);
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

export default compose(
  WithAuthRedirect,
  connect(MapStateToProps, {
    SetProfile,
    toogleFetching,
    profileComponentDidMountThunk,
  }),
  withRouter
)(ProfileContainer);
