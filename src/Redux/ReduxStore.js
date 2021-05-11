import { createStore, combineReducers } from "redux";
import DialogReducerRender from "./DialogReducerRender";
import PostsReducer from "./PostsReducer";


let reducers = combineReducers({
    Post: PostsReducer,
    Messages: DialogReducerRender
});

let store = createStore(reducers);



export default store;