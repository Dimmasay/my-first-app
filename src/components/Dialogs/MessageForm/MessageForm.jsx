import React from "react";
import form from "./MessageForm.module.css"


const MessageForm = (props) => {

    let newMessageText = React.createRef()

    let onButtonClick = () => {
        props.addMessage()
    }

    let onChangeText = () =>{
        let text = newMessageText.current.value
        props.currentTextMessage(text)

    }
    return (
    <div className={form.wrapper}>
        <form className={form.form}>
            <textarea
                onChange={onChangeText}
                ref={newMessageText}
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