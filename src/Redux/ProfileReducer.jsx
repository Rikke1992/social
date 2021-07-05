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
        case 'SetUserProfile': {
            let newState = { ...state };
            newState.myProfile.photos = { ...state.myProfile.photos }
            { 'тут остановился!!!!ПРодолжай клепать этот диспатч' }

        }

        default: {
            return state
        }
    };


};

export default ProfileReducer;