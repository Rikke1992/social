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
  profilePutStatusThunk,
} from "../../Redux/ProfileReducer";
import Profile from "./Profile";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.autorizedId;
    }

    this.props.profileGetThunk(userId);
    this.props.profileGetStatusThunk(userId);
  }

  render() {
    if (!this.props.Profile.isFetching) {
      return (
        <>
          <Profile
            {...this.props}
            /*  profilePutStatusThunk={this.props.profilePutStatusThunk} */
          />
        </>
      );
    } else {
      return <PreloaderItem />;
    }
  }
}

let MapStateToProps = (state) => {
  return {
    Profile: state.Profile,
    status: state.Profile.status,
    autorizedId: state.Auth.userID,
  };
};

export default compose(
  WithAuthRedirect,
  connect(MapStateToProps, {
    SetProfile,
    toogleFetching,
    profileGetThunk,
    profileGetStatusThunk,
    profilePutStatusThunk,
  }),
  withRouter
)(ProfileContainer);
