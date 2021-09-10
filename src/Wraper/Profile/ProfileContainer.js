import React from "react";
import { connect } from "react-redux";
import {SetUserProfile} from "./../../Redux/ProfileReducer";
import Profile from "./Profile";
import * as axios from "axios";
import { withRouter } from "react-router-dom";



class ProfileContainer extends React.Component {
  
  componentDidMount() {
  debugger
 /*  десь нужно реализоать нужную ссылку при выборе юзера 
  плюс в презентационной компоненте переделать все под 
  получение параметров и их прорисовку */
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
          .then(respons => {
            
              this.props.SetUserProfile(respons.data);
           
          })

  }
  render() {
      return <Profile
            {...this.props}
         
      />

  }


}


let MapStateToProps = (state) => {

  return ({
    name: state.Profile.myProfile.name,
    photoLarge: state.Profile.myProfile.photos.large,
    followed: state.Profile.myProfile.followed,
    profils: state.Profile.profils,
    state: state
  })
};

/* let mapDispatchToProps = (dispatch) => {
  return {
    SetUserProfile: (users) => {

      dispatch({ type: 'SetUserProfile', users })

    }
  }`
}; */


let WithUrlDataProfileContainer = withRouter(ProfileContainer);
export default connect(MapStateToProps,{ SetUserProfile})(WithUrlDataProfileContainer);