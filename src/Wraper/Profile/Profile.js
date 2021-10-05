import React from "react";
import ProfileStatus from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <span>{props.Profile.user.fullName}</span>
      <img src={props.Profile.user.photos.large}></img>
      <ProfileStatus {...props} status={props.status} state={props.state} />
    </div>
  );
};

export default Profile;
