import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile postsData={props.postData}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs messagesData={props.messageData} dialogsData={props.dialogData}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>


    )
}


export default App;
