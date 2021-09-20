import React from "react";
import PreloaderItem from "../../commond/Preloader";

const Profile = (props) => {
  return props.Profile.user ? (
    <div>
      <span>{props.Profile.user.fullName}</span>
      <img src={props.Profile.user.photos.large}></img>
    </div>
  ) : (
    <PreloaderItem />
  );
};

export default Profile;
