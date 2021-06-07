import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import './profile.css';
// import ProfileClass from "./ProfileClass";

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
let MapStateToProps = (state) => {
 
    return {
        profileItems: state.Profile.ProfileItems,
        Profile: state.Profile,
        pageSize: state.Profile.pageSize,
        totalCount: state.Profile.totalCount,
        currentPage: state.Profile.currentPage


        // postValue: state.Profile.postValue

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        // onChange: (value) => {

        //     dispatch({ type: "change", value: value })

        // },

        // Newtext: () => {

        //     dispatch({ type: 'click' })
        // },
        setUsers: (newState) => {
            dispatch({ type: 'setUsers', newState: newState })
        }
        ,
        setCurrentPage: (item) => {
            dispatch({ type: 'setCurrentPage', page: item })
        }

    }
};

const ProfileContainer = connect(MapStateToProps, mapDispatchToProps)(ProfileClass);

export default ProfileContainer;