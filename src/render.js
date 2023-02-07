import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './null.css';
import App from './App';
import {addPost, addMessage, currentTextPost, currentTextMessage} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireThree = (state) => {


    root.render(
        <React.StrictMode>
            <App stateData={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 currentTextPost={currentTextPost}
                 currentTextMessage={currentTextMessage}

            />
        </React.StrictMode>
    );

}

