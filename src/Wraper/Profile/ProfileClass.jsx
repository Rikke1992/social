// 'Доделать завтра профиль и далее реализовать загрзку профиля при клике на userov'
import React from "react";
import Profile from "./Profile";
import * as axios from "axios";

class ProfileClass extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(respons => {
                console.log(respons.data)
                this.props.SetUserProfile(respons.data);
                debugger;
            })

    }
    render() {
        return <Profile
            //  {...this.props}
            name={this.props.name}
            photoLarge={this.props.photoLarge}
            followed={this.props.followed}
        />

    }


}

export default ProfileClass;