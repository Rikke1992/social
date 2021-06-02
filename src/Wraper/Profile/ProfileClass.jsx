import * as axios from "axios";
import React from "react";


class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(respons => this.props.setUsers(respons.data.items))
    }

    // getUsers = ()=>{
    //     if (this.props.profileItems.length == 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(respons => this.props.setUsers(respons.data.items))

    //     }
    // }
    render() {
        return (<div>
            {this.props.profileItems.map((item) => {
                return (<div>
                    <div><span>{item.name}</span>
                        <img src="https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897" alt="" />

                    </div>{item.id}
                </div>)

            })}
        </div>)

    }
}

export default ProfileClass;