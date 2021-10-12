import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../commond/FormsControls/FormsControl";
import { maxLengthCreator, required } from "../../utils/validators/validator";
const MaxLengthCreator10 = maxLengthCreator(10);
const loginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          component={Input}
          validate={[required, MaxLengthCreator10]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          /*  type={"password"} */
          component={Input}
          validate={[required, MaxLengthCreator10]}
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
