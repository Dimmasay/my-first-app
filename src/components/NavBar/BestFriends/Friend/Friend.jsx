import friend from "./Friend.module.css";
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    return (
        <li className={friend.item}>
            <NavLink to ={`/${props.id}`}className={friend.link}>
                <div className={friend.avatar}>
                    <img
                        src={props.avatar}></img>
                </div>
                <div className={friend.name}>{props.name}</div>
                <div className={friend.surname}>{props.surname}</div>
            </NavLink>
        </li>
    );
};

export default Friend;
