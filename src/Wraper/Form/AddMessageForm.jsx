import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../commond/FormsControls/FormsControl";
import { maxLengthCreator, required } from "../../utils/validators/validator";

export const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"post"}
        component={Textarea}
        name={"postInput"}
        validate={[required, maxLengthCreator(10)]}
      />
      <button>Accept</button>
    </form>
  );
};
