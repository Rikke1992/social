import React from "react";
import Style from "./Style.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const HasError =
    meta.error && meta.touched ? <span>{meta.error}</span> : null;
  return (
    <div className={Style.formControl + " " + (HasError ? Style.error : " ")}>
      {props.children}
      {HasError}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...RestProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...RestProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...RestProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...RestProps} />
    </FormControl>
  );
};
