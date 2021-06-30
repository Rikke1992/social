let initialState = {
    ProfileItems: [],
    postValue: '',
    pageSize: 10,
    totalCount: 50,
    currentPage: 1,
    isFetching: true

};



const UsersReducer = (state = initialState, action) => {

    switch (action.type) {

        // case 'change': {

        //     let newState = { ...state, dialog: [...state.ProfileItems.dialog] };
        //     newState.postValue = action.value

        //     return newState

        // }
        //     break;

        // case "click": {

        //     let newState = { ...state };
        //     newState.ProfileItems.dialog = [...state.ProfileItems.dialog];
        //     let newDialog = {
        //         id: 2,
        //         profileMessage: state.postValue
        //     };

        //     newState.ProfileItems.dialog.push(newDialog)

        //     newState.postValue = ''


        //     return newState

        // }
        //     break;

        case 'setUsers': {
            let newState = { ...state };
            newState.ProfileItems = [...action.newState.items]
            newState.totalCount = action.newState.totalCount
            console.log(action)

            return newState
        }
            break;
        case 'setCurrentPage': {
            let newState = { ...state, ProfileItems: [...state.ProfileItems] };
            newState.currentPage = action.page
            return newState
        }

            break;

        case 'toogleFetching': {
            let newState = { ...state, ProfileItems: [...state.ProfileItems] };
            newState.isFetching = action.fetching
            return newState
        }

            break;

        default: { return state }
    }

};
export const toogleFetching = (itemFetching) => ({ type: 'toogleFetching', fetching: itemFetching });
export const setCurrentPage = (item) => ({ type: 'setCurrentPage', page: item });
export const setUsers = (newState) => ({ type: 'setUsers', newState: newState });


export default UsersReducer;
