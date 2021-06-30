import { createStore, combineReducers } from "redux";
import DialogReducerRender from "./DialogReducerRender";
import PostsReducer from "./PostsReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    Post: PostsReducer,
    Messages: DialogReducerRender,
    Users: UsersReducer
});

let store = createStore(reducers);



export default store;