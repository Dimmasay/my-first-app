import dialogs from './Dialogs.module.css'
import MessageItem from "./Message/Message";
import DialogItem from "./Dialog/Dialog";
import MessageForm from "./MessageForm/MessageForm";



const Dialogs = (props) => {

    let currentMessages = props.dialogsData.messages.map((message) => {
        return (<MessageItem message={message.message} id={message.id}/>)
    })
    let currentDialogs = props.dialogsData.dialogs.map((dialog) => {
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
                        <MessageForm
                            className={dialogs.form}
                            newMessageText={props.dialogsData.newMessageText}
                            dispatch={props.dispatch}
                        />
                </div>
            </div>
        </div>
    )
}

export default Dialogs