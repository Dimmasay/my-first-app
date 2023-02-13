import reducerDialogs from "./reducerDialogs";
import reducerPosts from "./reducerPosts";
import reducerNavbar from "./reducerNavbar";
import {combineReducers, legacy_createStore} from "redux";


let reducers = combineReducers({
   dialogsPage :reducerDialogs,
   postsPage : reducerPosts,
   navbar : reducerNavbar,
})


let store = legacy_createStore(reducers)
export default store

