import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(true);
  const activateEditMode = () => {
    setEditMode(false);
  };
  const DeactivateEditMode = (e) => {
    setEditMode(true);
    props.profilePutStatusThunk(e.currentTarget.value);
  };

  let [status, setStatus] = useState(props.status);
  const activateSetStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  if (editMode) {
    return (
      <div>
        <span onDoubleClick={activateEditMode}>{status}</span>
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

export default ProfileStatusWithHooks;
