import React from "react";
import wrp from './../wraper.module.css';
import {  NavLink } from "react-router-dom";




const Nav = () => {

    return (
        <div className={wrp.wraper}>
            <nav>
                <ul>
                    <li><NavLink to='/Message' >Message</NavLink></li>
                    <li> <NavLink to='/OPA!'>Sounds</NavLink></li>
                    <li> <NavLink to='/post'>Post</NavLink></li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;


