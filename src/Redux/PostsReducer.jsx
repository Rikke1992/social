
const PostsReducer = (state, action) => {

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