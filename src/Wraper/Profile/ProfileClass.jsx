import React from "react";
import Profile from "./Profile";
import * as axios from "axios";

class ProfileClass extends React.Component {
   
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(respons => {
               
                this.props.SetUserProfile(respons.data);
             
            })

    }
    render() {
        return <Profile
              {...this.props}
           
        />

    }


}

export default ProfileClass;