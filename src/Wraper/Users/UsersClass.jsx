import React from "react";
import "./UsersStyle.css";
import Users from "./Users";
import {
  toogleFetching,
  setCurrentPage,
  setUsers,
  follow,
  Unfollow,
  isFollowUp,
  isUnFollowUp,
} from "../../Redux/UsersReducer";
import PreloaderItem from "../../commond/Preloader";
import {
  getUsersThunkCreator,
  onPageChangedThunk,
} from "../../Redux/UsersReducer";
import { connect } from "react-redux";

class UsersClass extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  follow = (id) => {
    this.props.follow(id);
  };
  Unfollow = (id) => {
    this.props.Unfollow(id);
  };

  onPageChanged = (pageNumber) => {
    this.props.onPageChangedThunk(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.Profile.isFetching ? <PreloaderItem /> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged} />
      </>
    );
  }
}

let MapStateToProps = (state) => {
  return {
    profileItems: state.Users.ProfileItems,
    Profile: state.Users,
    pageSize: state.Users.pageSize,
    totalCount: state.Users.totalCount,
    currentPage: state.Users.currentPage,
    isFetching: state.Users.isFetching,
    isFollow: state.Users.isFollow,
  };
};
export default connect(MapStateToProps, {
  follow,
  Unfollow,
  toogleFetching,
  setCurrentPage,
  setUsers,
  isFollowUp,
  isUnFollowUp,
  getUsers: getUsersThunkCreator,
  onPageChangedThunk,
})(UsersClass);
