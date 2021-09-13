import React from "react";
import PreloaderItem from "../../commond/Preloader";


const Profile = (props) => {
    

     return (<div>

        <span>{props.profils.fullName}</span>
        <div><img src={props.profils.photos.large}></img>
            <span>Followed</span>
        </div>

    </div>
    )

};

export default Profile;