import React from "react";
import {addMessageCreator, currentTextMessageCreator} from "../../../redux/reducerDialogs";
import MessageForm from "./MessageForm";


const MessageFormContainer = (props) => {
debugger

    let onButtonClick = () => {
        props.store.dispatch(addMessageCreator())
    }

    let onChangeText = (text) =>{
        props.store.dispatch(currentTextMessageCreator(text))

    }
    return (
    <MessageForm addMessage={onButtonClick} changeTextBody={onChangeText} stateDialogs={props.stateDialogs}/>    )
}


export default MessageFormContainer