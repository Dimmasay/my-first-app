import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
import reducerNavbar from "./reducerNavbar";
import {combineReducers, legacy_createStore} from "redux";
import reducerUsers from "./reducerUsers";


let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile,
    navbar: reducerNavbar,
    usersPage: reducerUsers,
})


let store = legacy_createStore(reducers)

window.store = store
export default store


