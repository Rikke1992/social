import React from "react";
import ProfileStatus from "./ProfileInfo";
import ProfileStatusWithHooks from "./ProfileInfoWithHooks";

const Profile = (props) => {
  let update = (event) => {
    let photo = event.target.files[0];
    props.updatePhoto(photo);
  };
  return (
    <div>
      <span>{props.Profile.user.fullName}</span>
      <img
        src={
          !props.Profile.user.photos.large
            ? "https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897"
            : props.Profile.user.photos.large
        }
      ></img>
      {props.isOwner ? <input type="file" onChange={update}></input> : null}
      <ProfileStatusWithHooks
        {...props}
        status={props.status}
        profilePutStatusThunk={props.profilePutStatusThunk}
      />
    </div>
  );
};

export default Profile;
