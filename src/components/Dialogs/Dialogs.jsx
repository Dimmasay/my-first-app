import dialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={dialogs.dialogItem}>
            <NavLink className={dialogs.dialogPerson} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

const MessagesItem = (props) => {
    return (
        <li className={dialogs.MessagesItem}>
            <div className={dialogs.MessagesContent}>{props.message}</div>
        </li>
    )
}

const Dialogs = () => {
    return (
        <div className={dialogs.wrapper}>
            <div className={dialogs.columns}>
                <div className={dialogs.columnDialogs}>
                    <ul className={dialogs.dialogList}>
                        <DialogItem name='Dima' id='1'/>
                        <DialogItem name='Tanya' id='2'/>
                        <DialogItem name='Kostya' id='3'/>
                        <DialogItem name='Sergiy' id='4'/>
                        <DialogItem name='Larisa' id='5'/>
                    </ul>
                </div>
                <div className={dialogs.columnMessages}>
                    <ul className={dialogs.MessagesList}>
                        <MessagesItem message='Hello, how are you?'/>
                        <MessagesItem message='I`m hungry'/>
                        <MessagesItem message='Happy Birthday'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dialogs