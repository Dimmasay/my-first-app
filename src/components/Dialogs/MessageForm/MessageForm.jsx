import React from "react";
import form from "./MessageForm.module.css"
import {addMessageCreator, currentTextMessageCreator} from "../../../redux/reducerDialogs";


const MessageForm = (props) => {



    let onButtonClick = () => {
        props.dispatch(addMessageCreator())
    }

    let onChangeText = (event) =>{
        let text = event.target.value
        props.dispatch(currentTextMessageCreator(text))

    }
    return (
    <div className={form.wrapper}>
        <form className={form.form}>
            <textarea
                onChange={onChangeText}
                className={form.textInput}
                value={props.newMessageText}></textarea>
            <button
                onClick={onButtonClick}
                className={form.button}
                type='button'
            >Send</button>
        </form>
    </div>
    )
}


export default MessageForm