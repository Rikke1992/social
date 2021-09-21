import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { withRouter } from "react-router-dom";
import PreloaderItem from "../../commond/Preloader";
import { SetProfile, toogleFetching } from "../../Redux/ProfileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19743;
    }
    this.props.toogleFetching(true);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => this.props.SetProfile(response.data));
    this.props.toogleFetching(false);
  }
  render() {
    return (
      <>
        <Profile {...this.props} />
      </>
    );
  }
}

let MapStateToProps = (state) => {
  return { Profile: state.Profile };
};

export default connect(MapStateToProps, { SetProfile, toogleFetching })(
  withRouter(ProfileContainer)
);
