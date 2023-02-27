import style from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return <div className={style.container}>
        <div className={style.prew}>
            <NavLink to={`/profile/${props.user.id}`} className={style.image}>
                <img
                    src={props.user.photos.small !== null ? props.user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"'}/>
            </NavLink>

        </div>
        <div className={style.body}>
            <div className={style.person}>
                <div className={style.fullname}>{props.user.name}</div>
                <div className={style.status}>{props.user.status}</div>
            </div>
            <div className={style.location}>
                <div className={style.country}>{'country'}</div>
                <div className={style.city}>{'city'}</div>
            </div>
        </div>
    </div>

}

export default Friend