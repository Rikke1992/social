const Set_User_Profile = 'SetUserProfile';
let initialState = {

    profils : null

};

const ProfileReducer = (state = initialState, action) => {
 
    switch (action.type) {

        case 'SetUserProfile': {
             
            let newState = state.profils = action.profile ;
          
            

            return newState

        }
            break;

        default: { return state }
    }


};

export const SetUserProfile = (profile) => ({ type: 'SetUserProfile', profile  });

export default ProfileReducer;