import { createStore, combineReducers } from "redux";
import DialogReducerRender from "./DialogReducerRender";
import PostsReducer from "./PostsReducer";
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
    Post: PostsReducer,
    Messages: DialogReducerRender,
    Profile: ProfileReducer
});

let store = createStore(reducers);



export default store;