// 'Доделать завтра профиль и далее реализовать загрзку профиля при клике на userov'
import React from "react";
import Profile from "./Profile"

class ProfileClass extends React.Component {
    componentDidMount() {

    }
    render() {
        return <Profile
            name={this.props.name}
            photoLarge={this.props.photoLarge}
            followed={this.props.followed}
        />
    }


}

export default ProfileClass;