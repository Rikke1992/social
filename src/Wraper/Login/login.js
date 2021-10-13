import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../commond/FormsControls/FormsControl";
import { loginThunk } from "./../../Redux/AuthReducer";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import { Redirect } from "react-router";
const MaxLengthCreator30 = maxLengthCreator(30);
const loginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"email"}
          component={Input}
          validate={[required, MaxLengthCreator30]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required, MaxLengthCreator30]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(loginForm);

const login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunk(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <>
      <div>
        <h1> Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </>
  );
};
const MapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
});
export default connect(MapStateToProps, { loginThunk })(login);
