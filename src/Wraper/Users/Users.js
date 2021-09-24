import React from "react";

import Preloader from "./../../Image/Preloader.gif";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  /* let usersCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= usersCount; i++) {
    pages.push(i);
  } */
  
  return (
    <div>
      {props.pagesMap()}
      {/* <div>
        {pages.map((item) => {
          if (
            item == props.currentPage - 1 ||
            item == props.currentPage ||
            item == props.currentPage + 1
          ) {
            return (
              <span
                className={item === props.currentPage ? "strong" : "normal"}
                onClick={() => {
                  props.onPageChanged(item);
                }}
              >
                {item}
              </span>
            );
          } else if (usersCount - item == 0) {
            return (
              <span
                className={item === props.currentPage ? "strong" : "normal"}
                onClick={() => {
                  props.onPageChanged(item);
                }}
              >
                ...{usersCount}
              </span>
            );
          }
        })}
      </div> */}
      {props.profileItems.map((item) => {
        return (
          <div>
            <NavLink to={"/Profile/" + item.id}>
              <div>
                <span>{item.name}</span>

                <img
                  src={
                    !item.photos.large
                      ? "https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897"
                      : item.photos.large
                  }
                  alt=""
                />
              </div>
              {item.id}
            </NavLink>

            {item.followed ? (
              <button
                disabled={props.isFollow.some((it) => it == item.id)}
                onClick={() => {
                  props.isFollowUp(item.id);
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "2a020f04-e4c5-4e0e-aaa6-426dfac15e2d",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode == 0) {
                        props.Unfollow(item.id);
                        props.isUnFollowUp(item.id);
                      }
                    });
                }}
              >
                follow
              </button>
            ) : (
              <button
                disabled={props.isFollow.some((it) => it == item.id)}
                onClick={() => {
                  props.isFollowUp(item.id);
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "2a020f04-e4c5-4e0e-aaa6-426dfac15e2d",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode == 0) {
                        props.follow(item.id);
                        props.isUnFollowUp(item.id);
                      }
                    });
                }}
              >
                Unfollow
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
