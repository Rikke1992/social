import * as axios from "axios";
import React from "react";
import "./UsersStyle.css";
import Users from "./Users";

import PreloaderItem from "../../commond/Preloader";
import { componentDidMountAxios, onPageChangedAxios } from "../../API/api";
//this.props.currentPage  this.props.pageSize
class UsersClass extends React.Component {
  componentDidMount() {
    this.props.toogleFetching(true);
    componentDidMountAxios(this.props.currentPage, this.props.pageSize).then(
      (data) => {
        this.props.setUsers(data);
        this.props.toogleFetching(false);
      }
    );
  }

  follow = (id) => {
    this.props.follow(id);
  };
  Unfollow = (id) => {
    this.props.Unfollow(id);
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleFetching(true);

    onPageChangedAxios(pageNumber, this.props.pageSize).then((data) => {
      this.props.setUsers(data);
      this.props.toogleFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.Profile.isFetching ? <PreloaderItem /> : null}
        <Users {...this.props} />
      </>
    );
  }
}

export default UsersClass;
