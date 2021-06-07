
import React from "react";
import './profile.css';

const Users = (props) => {

    let usersCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= usersCount; i++) {
        pages.push(i)
    }

    return (<div>

        <div>{pages.map((item) => {
            return <span className={item === props.currentPage ? 'strong' : 'normal'}
                onClick={() => { props.onPageChanged(item); }}>{item}</span>
        })}</div>


        {props.profileItems.map((item) => {
            return (<div>
                <div><span>{item.name}</span>
                    <img src="https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897" alt="" />

                </div>{item.id}
            </div>)

        })}
    </div>)

};

export default Users;