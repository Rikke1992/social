import * as axios from "axios";
import React from "react";


const Profile = (props) => {

    
    if (props.profileItems.length == 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(respons => props.setUsers(respons.data.items))

    }


    // let newPostElement = React.createRef();

    // let render = () => {

    //     let result = props.ProfileItems.map((item) => {
    //         return (<div>
    //             <div><span>{item.name}</span>
    //                 <img src="https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897" alt="" />

    //             </div>{item.id}
    //         </div>)

    //     });

    //     return result
    // };

    // let onChange = () => {
    //     let value = newPostElement.current.value;
    //     props.onChange(value)
    // };
    // let addPost = () => {

    //     props.Newtext()
    // };

    return (<div>
        {props.profileItems.map((item) => {
            return (<div>
                <div><span>{item.name}</span>
                    <img src="https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897" alt="" />

                </div>{item.id}
            </div>)

        })}
    </div>)
};

export default Profile;