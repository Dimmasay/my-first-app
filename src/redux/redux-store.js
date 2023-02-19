import reducerDialogs from "./reducerDialogs";
import reducerPosts from "./reducerPosts";
import reducerNavbar from "./reducerNavbar";
import {combineReducers, legacy_createStore} from "redux";
import reducerUsers from "./reducerUsers";


let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    postsPage: reducerPosts,
    navbar: reducerNavbar,
    usersPage: reducerUsers,
})


let store = legacy_createStore(reducers)

window.store = store
export default store


