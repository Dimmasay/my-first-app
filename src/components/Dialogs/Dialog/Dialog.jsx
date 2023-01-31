import dialogs from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={dialogs.dialogItem}>
            <NavLink className={dialogs.dialogPerson} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem