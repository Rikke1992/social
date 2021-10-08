import { createStore, combineReducers, applyMiddleware } from "redux";
import AuthReducer from "./AuthReducer";
import DialogReducerRender from "./DialogReducerRender";
import PostsReducer from "./PostsReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  Post: PostsReducer,
  Messages: DialogReducerRender,
  Users: UsersReducer,
  Profile: ProfileReducer,
  Auth: AuthReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
