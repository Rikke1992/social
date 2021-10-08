import React from "react";
import { Field, reduxForm } from "redux-form";

const loginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={"input"}
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
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
    console.log(formData);
  };
  return (
    <>
      <div>
        <h1> Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default login;
