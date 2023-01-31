import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './null.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
    {name: 'Dima', id: 1},
    {name: 'Tanya', id: 2},
    {name: 'Kostya', id: 3},
    {name: 'Sergiy', id: 4},
    {name: 'Larisa', id: 5},
]

const messages = [
    {message: 'Hello, how are you?', id: 1},
    {message: 'I`m hungry', id: 2},
    {message: 'Happy Birthday', id: 3},
    {message: 'Yo', id: 4},
    {message: 'ok?', id: 5},
]

const posts = [
    {message: 'Hi, how are you?', like: 10},
    {message: 'Happy birthday!!!', like: 15},
    {message: 'It`s my first post', like: 3},

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App messageData={messages} dialogData={dialogs} postData={posts}/>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
