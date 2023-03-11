import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
import reducerNavbar from "./reducerNavbar";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import reducerUsers from "./reducerUsers";
import reducerAuth from "./reducerAuth";
import thunkMiddleware from "redux-thunk";
import reducerFriends from "./reducerFriends";
import reducerApp from "./reducerApp";
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile,
    navbar: reducerNavbar,
    usersPage: reducerUsers,
    auth: reducerAuth,
    friendsPage: reducerFriends,
    app: reducerApp
})




const store = legacy_createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
);



window.store = store
export default store


