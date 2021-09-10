import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import UsersClass from "./UsersClass";
import { toogleFetching, setCurrentPage, setUsers } from '../../Redux/UsersReducer';
// class ProfileClass extends React.Component {

//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(respons => this.props.setUsers(respons.data.items))
//     }

//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//             .then(respons => this.props.setUsers(respons.data.items))
//     }
//     render() {

//         return (
//             <Users currentPage={this.props.currentPage}
//                 totalCount={this.props.totalCount}
//                 pageSize={this.props.pageSize}
//                 Profile={this.props.Profile}
//                 profileItems={this.props.profileItems}
//                 onPageChanged={this.onPageChanged}
//             />)


//     }
// }
let MapStateToProps = (state) => {

    return {
        profileItems: state.Users.ProfileItems,
        Profile: state.Users,
        pageSize: state.Users.pageSize,
        totalCount: state.Users.totalCount,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching



        // postValue: state.Profile.postValue

    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {

//         setUsers: (newState) => {
//             dispatch({ type: 'setUsers', newState: newState })
//         }
//         ,
//         setCurrentPage: (item) => {
//             dispatch({ type: 'setCurrentPage', page: item })
//         },
//         toogleFetching: (itemFetching)=>{
//             dispatch({type:'toogleFetching',fetching: itemFetching})
//         }

//     }
// };

const UsersContainer = connect(MapStateToProps, { toogleFetching, setCurrentPage, setUsers })(UsersClass);

export default UsersContainer;