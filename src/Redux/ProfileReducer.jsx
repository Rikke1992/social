const Set_User_Profile = 'SetUserProfile';
let initialState = {

    myProfile: {
        "name": "Vladimir",
        "id": 1,
        "uniqueUrlName": 'MyPage',
        "photos": {
            "small": 'https://cdn.vox-cdn.com/thumbor/3m4VtSKbEajAGmk_grV86XDps_Y=/0x0:2842x1470/1400x1050/filters:focal(1209x317:1663x771):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53961065/bossbabycover.0.jpg',
            "large": 'https://parfumglamour.com/files/products/Hugo-Boss-Boss-Bottled-Absolute-poster.1000x1000.jpg?48b1022706608df4f6c4d5f2417a0567'
        },
        "status": null,
        "followed": false
    },
    profils: null

};

const ProfileReducer = (state = initialState, action) => {
 
    switch (action.type) {

        case Set_User_Profile: {
            
            let newState = { ...state, profils : action.profile };
           
            

            return newState

        }
            break;

        default: { return state }
    }


};

export const SetUserProfile = (profile) => ({ type: Set_User_Profile, profile  });

export default ProfileReducer;