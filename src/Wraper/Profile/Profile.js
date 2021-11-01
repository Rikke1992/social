import React from "react";
import ProfileStatus from "./ProfileInfo";
import ProfileStatusWithHooks from "./ProfileInfoWithHooks";

const Profile = (props) => {
  console.log("ProfileSelector>>>>" + props.ProfileSelector);
  return (
    <div>
      <span>{props.Profile.user.fullName}</span>
      <img src={props.Profile.user.photos.large}></img>
      <ProfileStatusWithHooks
        {...props}
        status={props.status}
        profilePutStatusThunk={props.profilePutStatusThunk}
      />
    </div>
  );
};

export default Profile;
