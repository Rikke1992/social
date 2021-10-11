let initialState = {
  postValue: "",
  postItem: [
    {
      id: 1,
      name: "Jone",
      text: "Hi man",
    },
    {
      id: 2,
      name: "Dan",
      text: "Hi. How are you?",
    },
  ],
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "newPost":
      {
        let newState = { ...state };
        newState.postItem = [...state.postItem];
        let newPostText = {
          id: 11,
          name: "Vladimir",
          text: action.postValue,
        };
        console.log(action.postValue);

        newState.postItem.push(newPostText);

        return newState;
      }

      break;

    default: {
      return state;
    }
  }
};
export const newPost = (postValue) => {
  return { type: "newPost", postValue };
};
export default PostsReducer;
