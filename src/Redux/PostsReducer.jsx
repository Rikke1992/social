let initialState = {

    postValue: '',
    postItem: [{
        id: 1,
        name: 'Jone',
        text: 'Hi man'
    },
    {
        id: 2,
        name: 'Dan',
        text: 'Hi. How are you?'
    }]

};

const PostsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'onChange': {
            let newState ={...state};
    
            newState.postValue = action.Value
           
            
            return newState
        }
            break;
        case 'newPostTex':
            {
                let newState ={...state};
                newState.postItem = [...state.postItem]
                let newPostText = {
                    id: 11,
                    name: 'Vova',
                    text: state.postValue
                };
                
                newState.postItem.push(newPostText);
                newState.postValue = '';

                return newState

            }

            break;

        default: {
            return state
        }
    };

};

export default PostsReducer;