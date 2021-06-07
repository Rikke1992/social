import * as axios from "axios";
import React from "react";
import './profile.css';
import Users from "./Users";



class ProfileClass extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respons => this.props.setUsers(respons.data.items))
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respons => this.props.setUsers(respons.data.items))
    }
    render() {
      
        return (
        <Users currentPage={this.props.currentPage}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            Profile={this.props.Profile}
            profileItems={this.props.profileItems}
            onPageChanged={this.onPageChanged}
        />)
    

    }
}

export default ProfileClass;