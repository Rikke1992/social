import { createStore, combineReducers } from "redux";
import DialogReducerRender from "./DialogReducerRender";
import PostsReducer from "./PostsReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
  Post: PostsReducer,
  Messages: DialogReducerRender,
  Users: UsersReducer,
  Profile: ProfileReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
