
import  message from "./Message.module.css"

const MessageItem = (props) => {
    return (
        <li className={message.item}>
            <div className={message.content}>{props.message}</div>
        </li>
    )
}


export default MessageItem