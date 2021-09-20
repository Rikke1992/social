
import React from "react";

import Preloader from "./../../Image/Preloader.gif";
import { NavLink } from "react-router-dom";
import Profile from "./../Profile/Profile"

const Users = (props) => {

    let usersCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= usersCount; i++) {
        pages.push(i)
    }

    return (<div>

        <div>{pages.map((item) => {
            if (item == props.currentPage - 1 || item == props.currentPage 
                || item == props.currentPage + 1 ) {
                return <span className={item === props.currentPage ? 'strong' : 'normal'}
                    onClick={() => { props.onPageChanged(item); }}>{item}</span>
            }else if( usersCount - item == 0){
               return <span className={item === props.currentPage ? 'strong' : 'normal'}
                    onClick={() => { props.onPageChanged(item); }}>...{usersCount}</span>
            }
        }

        )}
        </div>


        {props.profileItems.map((item) => {
                  
            return (<div><NavLink to={"/Profile/" + item.id} >
                <div><span>{item.name}</span>
          
                    <img src={!item.photos.large?"https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897":item.photos.large} alt="" />

                </div>{item.id}
            </NavLink> </div>)

        })}
    </div>)

};

export default Users;