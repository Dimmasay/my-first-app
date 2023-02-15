import dialogs from './Dialogs.module.css'
import MessageItem from "./Message/Message";
import DialogItem from "./Dialog/Dialog";
import MessageFormContainer from "./MessageForm/MessageFormContainer";


const Dialogs = (props) => {
    let stateDialogs = props.stateDialogs
    let currentMessages = stateDialogs.messages.map((message) => {
        return (<MessageItem message={message.message} id={message.id}/>)
    })
    let currentDialogs = stateDialogs.dialogs.map((dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    })

    return (
        <div className={dialogs.wrapper}>
            <div className={dialogs.columns}>
                <div className={dialogs.columnDialogs}>
                    <ul className={dialogs.dialogList}>
                        {currentDialogs}
                    </ul>
                </div>
                <div className={dialogs.columnMessages}>
                    <ul className={dialogs.messagesList}>
                        {currentMessages}
                    </ul>
                    <MessageFormContainer/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs