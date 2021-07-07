import React from "react";


const Profile = (props) => {

    return (<div>

        <span>{props.name}</span>
        <div><img src={props.photoLarge}></img>
            <span>Followed</span>
        </div>

    </div>
    )

};

export default Profile;