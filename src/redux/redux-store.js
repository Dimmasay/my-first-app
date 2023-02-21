import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
import reducerNavbar from "./reducerNavbar";
import {combineReducers, legacy_createStore} from "redux";
import reducerUsers from "./reducerUsers";
import reducerAuth from "./reducerAuth";


let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile,
    navbar: reducerNavbar,
    usersPage: reducerUsers,
    auth: reducerAuth,
})


let store = legacy_createStore(reducers)

window.store = store
export default store


