import React, { Profiler } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import PreloaderItem from "../../commond/Preloader";
import {
  profileGetThunk,
  SetProfile,
  toogleFetching,
  profileGetStatusThunk,
} from "../../Redux/ProfileReducer";
import Profile from "./Profile";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    this.props.profileGetThunk(userId);
    this.props.profileGetStatusThunk(userId);
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
  return { Profile: state.Profile, status: state.Profile.status };
};

export default compose(
  // WithAuthRedirect, !!! after testing, use this HOC!
  connect(MapStateToProps, {
    SetProfile,
    toogleFetching,
    profileGetThunk,
    profileGetStatusThunk,
  }),
  withRouter
)(ProfileContainer);
