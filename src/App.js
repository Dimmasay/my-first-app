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
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {initializedAppTC, initializedTC} from "./redux/reducerApp";
import React from "react";


class App extends React.Component {
    componentDidMount() {
        this.props.initializedAppTC()
    }

    render() {
        if (this.props.initialized) {
            return (
                <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <NavBarContainer/>
                        <div className='app-wrapper-content'>
                            <Routes>
                                <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
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
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default connect(mapStateToProps, {initializedAppTC})(App);


