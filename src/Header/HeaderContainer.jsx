import React from "react";
import "./Header.module.css";
import Header from "./Header.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { SetUserData, isAuth, authMeThunk } from "./../Redux/AuthReducer";
import { usersAPI } from "../API/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunk();

    /* usersAPI.authMe().then((respons) => {
      if (respons.data.resultCode === 0) {
        let { id, email, login } = respons.data.data;
        this.props.SetUserData(id, email, login);
        this.props.isAuth(true);
      }
    }); */

    /* axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((respons) => {
        if (respons.data.resultCode === 0) {
          let { id, email, login } = respons.data.data;
          this.props.SetUserData(id, email, login);
          this.props.isAuth(true);
        }
      }); */
  }
  render() {
    return (
      <Header
        {...this.props}
        isAuth={this.props.isAuth}
        login={this.props.login}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return { isAuth: state.Auth.isAuth, login: state.Auth.login };
};

export default connect(mapStateToProps, { SetUserData, isAuth, authMeThunk })(
  HeaderContainer
);
