import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {initializedAppTC} from "./redux/reducerApp";
import React, {Suspense, useEffect} from "react";

;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


const App = (props) => {

    useEffect(() => {
        props.initializedAppTC()
    }, [])


    if (props.initialized) {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavBarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={
                                <Suspense fallback={<div>Завантаження...</div>}>
                                    <DialogsContainer/>
                                </Suspense>
                            }/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/login' element={<LoginContainer/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/friends' element={<FriendsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default connect(mapStateToProps, {initializedAppTC})(App);


