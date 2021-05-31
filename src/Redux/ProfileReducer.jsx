let initialState = {
    ProfileItems: [],
    postValue: ''

};



const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'change': {

            let newState = { ...state, dialog: [...state.ProfileItems.dialog] };
            newState.postValue = action.value

            return newState

        }
            break;

        case "click": {

            let newState = { ...state };
            newState.ProfileItems.dialog = [...state.ProfileItems.dialog];
            let newDialog = {
                id: 2,
                profileMessage: state.postValue
            };

            newState.ProfileItems.dialog.push(newDialog)

            newState.postValue = ''


            return newState

        }
        case 'setUsers': {
            let newState = { ...state };
            newState.ProfileItems = [...action.newState]
            console.log(newState)

            return newState
        }
            break;
        default: { return state }
    }

};

export default ProfileReducer;
const setUsers = () => { };