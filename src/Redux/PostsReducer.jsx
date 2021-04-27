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
            state.postValue = action.Value
            return state
        }
            break;
        case 'newPostTex':
            {

                let newPostText = {
                    id: 11,
                    name: 'Vova',
                    text: state.postValue
                };

                state.postItem.push(newPostText);
                state.postValue = ''
                return state

            }
            break;


    };
    
};

export default PostsReducer;