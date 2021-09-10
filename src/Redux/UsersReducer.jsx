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
export const setUsers = (newState) => ({ type: 'setUsers', newState });


export default UsersReducer;
