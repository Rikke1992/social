import * as axios from "axios";
import React from "react";
import './profile.css';
import Users from "./Users";

import PreloaderItem from "../../commond/Preloader";



class UsersClass extends React.Component {

    componentDidMount() {
        this.props.toogleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respons => {

                this.props.setUsers(respons.data);
                this.props.toogleFetching(false);
            })


    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respons => {

                this.props.setUsers(respons.data);
                this.props.toogleFetching(false);
            })
    }
    render() {

        return <>
          
            {this.props.Profile.isFetching ? <PreloaderItem /> : null}
            <Users currentPage={this.props.currentPage}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                Profile={this.props.Profile}
                profileItems={this.props.profileItems}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
            />
        </>


    }
}

export default UsersClass;