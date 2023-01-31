import dialogs from './Dialogs.module.css'
import MessageItem from "./Message/Message";
import DialogItem from "./Dialog/Dialog";


const Dialogs = (props) => {

    let currentMessages = props.messagesData.map((message) => {
        return (<MessageItem message={message.message} id={message.id}/>)
    })
    let currentDialogs = props.dialogsData.map((dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
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
                    <ul className={dialogs.MessagesList}>
                        {currentMessages}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dialogs