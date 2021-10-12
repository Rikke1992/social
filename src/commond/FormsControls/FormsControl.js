import React from "react";
import Style from "./Style.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const HasError =
    meta.error && meta.touched ? <span>{meta.error}</span> : null;
  return (
    <div className={Style.formControl + " " + (HasError ? Style.error : " ")}>
      <textarea {...input} {...props} />
      {HasError}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const HasError =
    meta.error && meta.touched ? <span>{meta.error}</span> : null;
  return (
    <div className={Style.formControl + " " + (HasError ? Style.error : " ")}>
      <input {...input} {...props} />
      {HasError}
    </div>
  );
};
