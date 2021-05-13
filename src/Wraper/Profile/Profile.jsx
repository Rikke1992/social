import React from "react";

const Profile = (props) => {

    let render = () => {
        let result = props.profileItems.map((item) => {
            return (<div>
                <div>image</div>
                <div>Followed</div>
                <div><span>{item.name}</span>
                    <span>{item.message}</span></div>
            </div>)
        });

        return result
    };
    return <div>{render ()}</div>
};

export default Profile;