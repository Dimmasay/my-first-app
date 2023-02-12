import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './null.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireThree = (state) => {

debugger
    root.render(

        <React.StrictMode>

            <App stateData={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}


rerenderEntireThree(store.getState())
store.watcher(rerenderEntireThree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
