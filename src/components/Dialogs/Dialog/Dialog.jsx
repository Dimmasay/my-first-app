import {NavLink} from "react-router-dom";
import dialog from "./Dialog.module.css"

const DialogItem = (props) => {
    return (
        <li className={dialog.item}>
            <div className={dialog.avatar}>
                <img src={props.avatar}></img>
            </div>
            <NavLink className={dialog.person} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem