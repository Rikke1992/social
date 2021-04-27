import { createStore, combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import DialogReducerRender from "./PostsReducer";

let reducers = combineReducers({
    Post: PostsReducer,
    Messages: DialogReducerRender
});

let store = createStore(reducers);



export default store;