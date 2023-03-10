import dialogs from './Dialogs.module.css'
import MessageItem from "./Message/Message";
import DialogItem from "./Dialog/Dialog";
import MessageForm from "./MessageForm/MessageForm";
import {connect} from "react-redux";
import {addMessageAC} from "../../redux/reducerDialogs";


const DialogsWrapper = (props) => {

    let currentMessages = props.messages.map((message) => {
        return (<MessageItem message={message.message} id={message.id}/>)
    })
    let currentDialogs = props.dialogs.map((dialog) => {
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
                    <MessageForm addMessageAC={props.addMessageAC}/>
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}
const DialogsContainer = connect(mapStateToProps,{
    addMessageAC
})(DialogsWrapper)
export default DialogsContainer