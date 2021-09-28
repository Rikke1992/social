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
import { Redirect } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class UsersClass extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  usersCount = () => {
    return Math.ceil(this.props.totalCount / this.props.pageSize);
  };
  pages = () => {
    let pages = [];
    for (let i = 1; i <= this.usersCount(); i++) {
      pages.push(i);
    }

    return pages;
  };
  pagesMap = (
    usersCountEl = this.usersCount(),
    pages = this.pages(),
    currentPage = this.props.currentPage
  ) => {
    return (
      <div>
        {pages.map((item) => {
          if (
            item == currentPage - 1 ||
            item == currentPage ||
            item == currentPage + 1
          ) {
            return (
              <span
                className={item === currentPage ? "strong" : "normal"}
                onClick={() => {
                  this.onPageChanged(item);
                }}
              >
                {item}
              </span>
            );
          } else if (usersCountEl - item == 0) {
            return (
              <span
                className={item === currentPage ? "strong" : "normal"}
                onClick={() => {
                  this.onPageChanged(item);
                }}
              >
                ...{usersCountEl}
              </span>
            );
          }
        })}
      </div>
    );
  };

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
        <Users
          {...this.props}
          onPageChanged={this.onPageChanged}
          usersCount={this.usersCount}
          pages={this.pages}
          pagesMap={this.pagesMap}
        />
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

export default compose(
  WithAuthRedirect,
  connect(MapStateToProps, {
    follow,
    Unfollow,
    toogleFetching,
    setCurrentPage,
    setUsers,
    isFollowUp,
    isUnFollowUp,
    getUsers: getUsersThunkCreator,
    onPageChangedThunk,
  })
)(UsersClass);
