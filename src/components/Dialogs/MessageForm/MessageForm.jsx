import React from "react";
import form from "./MessageForm.module.css"


const MessageForm = (props) => {

    let onButtonClick = () => {
        props.addMessage()
    }

    let onChangeText = (event) => {
        let text = event.target.value
        props.changeTextBody(text)
    }

    return (
        <div className={form.wrapper}>
            <form className={form.form}>
            <textarea
                onChange={onChangeText}
                className={form.textInput}
                value={props.stateDialogs.newMessageText}></textarea>
                <button
                    onClick={onButtonClick}
                    className={form.button}
                    type='button'
                >Send
                </button>
            </form>
        </div>
    )
}


export default MessageForm