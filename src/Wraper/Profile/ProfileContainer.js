import React from "react";
import { connect } from "react-redux";
import {SetUserProfile} from "./../../Redux/ProfileReducer";
import Profile from "./Profile";
import * as axios from "axios";
import { withRouter } from "react-router-dom";



class ProfileContainer extends React.Component {
 
  componentDidMount() {
 
  /* let userId = this.props.match.params.userId;
  if (!userId){
    userId = 2;
  }
   */
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/5` )
          .then(response => {
            
              this.props.SetUserProfile(response.data);
           
          });

  }
  render() {
    
      return <Profile {...this.props} profils= {this.props.profils}/>

  }
}

let MapStateToProps = (state) => {

  return ({profils: state.Profile.profils})
};



let WithUrlDataProfileContainer = withRouter(ProfileContainer);
export default connect(MapStateToProps,{ SetUserProfile})(WithUrlDataProfileContainer);