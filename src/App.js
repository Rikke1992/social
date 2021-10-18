import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.css";
import HeaderContainer from "./Header/HeaderContainer";
import { WithAuthRedirect } from "./hoc/WithAuthRedirect";
import { authAppMeThunk } from "./Redux/AppReducer";

import { withRouter, Redirect } from "react-router-dom";
import Wraper from "./Wraper/wraper.jsx";
/* 
function App(props) {
  return (
    <div className="App">
      <HeaderContainer />

      <Wraper />
    </div>
  );
} */

class App extends React.Component {
  componentDidMount() {
    this.props.authAppMeThunk().then(() => {
      if (!this.props.autorizate) {
        alert("zopka");
      }
    });
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer />

        <Wraper />
      </div>
    );
  }
}
let MapStateToProps = (state) => {
  return { autorizate: state.App.autorizate };
};

export default compose(
  connect(MapStateToProps, { authAppMeThunk }),
  withRouter
)(App);
