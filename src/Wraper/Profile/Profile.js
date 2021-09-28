import React from "react";
import ProfileStatus from "./ProfileInfo";

const Profile = (props) => {
  /* return !props.Profile.isFetching ? (
    <div>
      <span>{props.Profile.user.fullName}</span>
      <img src={props.Profile.user.photos.large}></img>
    </div>
  ) : (
    <PreloaderItem />
  ); */
  return (
    <div>
      <span>{props.Profile.user.fullName}</span>
      <img src={props.Profile.user.photos.large}></img>
      <ProfileStatus profileStatus={"hello my friends"} state={props.state} />
    </div>
  );
};

export default Profile;
