import React from "react";
import PreloaderItem from "../../commond/Preloader";

const Profile = (props) => {
  return (
    <div>
      <span>{props.profils.user.fullName}</span>
      <div>
        <img src={props.profils.user.photos.large}></img>
        <span>Followed</span>
      </div>
    </div>
  );
};

export default Profile;
