import dialogs from './../Dialogs.module.css'


const MessageItem = (props) => {
    return (
        <li className={dialogs.MessagesItem}>
            <div className={dialogs.MessagesContent}>{props.message}</div>
        </li>
    )
}


export default MessageItem