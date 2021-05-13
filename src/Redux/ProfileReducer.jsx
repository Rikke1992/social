let initialState = {
    ProfileItems: [{
        id: 1,
        name: 'Vladimir G',
        message: "Hello world!",
        country: "Ukraine",
        city: "Harkov",
        followed: true
    }]

};

const ProfileReducer = (state = initialState, action) => {
    return state
};

export default ProfileReducer;