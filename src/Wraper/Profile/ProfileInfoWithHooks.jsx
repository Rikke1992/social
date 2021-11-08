import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(true);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(false);
  };
  const DeactivateEditMode = (e) => {
    setEditMode(true);
    props.profilePutStatusThunk(status);
  };

  const activateSetStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  if (editMode) {
    return (
      <div>
        <span onDoubleClick={activateEditMode}>
          {props.status || "enter your status"}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <input
          onChange={activateSetStatus}
          onBlur={DeactivateEditMode}
          value={status}
        ></input>
      </div>
    );
  }
};

//s
export default ProfileStatusWithHooks;
