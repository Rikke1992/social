
const DialogsReducer = (store) => {
    let newPostText = {
        id: 11,
        name: 'Vova',
        text: store.state.postValue
    };


    store.state.post.push(newPostText);
    
};

export default DialogsReducer;