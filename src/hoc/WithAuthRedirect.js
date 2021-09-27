import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let MapStateToPropsForRedirect = (state) => {
  return { isAuth: state.Auth.isAuth };
};
export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
