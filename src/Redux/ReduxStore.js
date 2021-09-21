import { createStore, combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DialogReducerRender from "./DialogReducerRender";
import PostsReducer from "./PostsReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
  Post: PostsReducer,
  Messages: DialogReducerRender,
  Users: UsersReducer,
  Profile: ProfileReducer,
  Auth: AuthReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
