import React from "react";
import { connect } from "react-redux";
import { SetUserProfile, toogleFetching } from "./../../Redux/ProfileReducer";
import Profile from "./Profile";
import * as axios from "axios";
import { withRouter } from "react-router-dom";
import PreloaderItem from "../../commond/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.toogleFetching(true);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.SetUserProfile(response.data);
      })
      .then((resp) => {
        this.props.toogleFetching(false);
      });
  }

  render() {
    return (
      <>
        {this.props.profils.isFetching ? <PreloaderItem /> : null}
        <Profile {...this.props} profils={this.props.profils} />;
      </>
    );
  }
}

let MapStateToProps = (state) => {
  return { profils: state.Profile.profils };
};

let WithUrlDataProfileContainer = withRouter(ProfileContainer);
export default connect(MapStateToProps, { SetUserProfile, toogleFetching })(
  WithUrlDataProfileContainer
);
