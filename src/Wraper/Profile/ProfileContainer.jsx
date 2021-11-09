import React, { Profiler } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import PreloaderItem from "../../commond/Preloader";
import {
  profileGetThunk,
  SetProfile,
  toogleFetching,
  profileGetStatusThunk,
  profilePutStatusThunk,
  updatePhotoThunk,
} from "../../Redux/ProfileReducer";
import Profile from "./Profile";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import {
  ProfileSelector,
  ProfileSelectorAutorizedId,
  ProfileSelectorStatus,
} from "./../../selectors/ProfileSelector";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.autorizedId;
    }

    this.props.profileGetThunk(userId);
    this.props.profileGetStatusThunk(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  updatePhoto = (photo) => {
    this.props.updatePhotoThunk(photo);
  };

  render() {
    if (!this.props.Profile.isFetching) {
      return (
        <>
          <Profile
            {...this.props}
            isOwner={this.props.match.params.userId ? false : true}
            updatePhoto={this.updatePhoto}
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
    Profile: ProfileSelector(state),
    status: ProfileSelectorStatus(state),
    autorizedId: ProfileSelectorAutorizedId(state),
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
    updatePhotoThunk,
  }),
  withRouter
)(ProfileContainer);
