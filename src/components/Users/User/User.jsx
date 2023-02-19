import style from "./User.module.css";

const User = (props) => {

    return<div className={style.container}>
        <div className={style.prew}>
            <div className={style.image}>
                <img src={props.user.photos.small !== null ?props.user.photos.small :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"'}/>
            </div>
            {props.user.followed
                ? <button
                    onClick={() => {
                        props.unFollowUser(props.user.id)
                    }}
                    className={style.button}
                    type='button'>Unfollow</button>
                : <button
                    onClick={() => {
                        props.followUser(props.user.id)
                    }}
                    className={style.button}
                    type='button'>Follow</button>
            }
        </div>
        <div className={style.body}>
            <div className={style.person}>
                <div className={style.fullname}>{props.user.name}</div>
                <div className={style.status}>{props.user.status}</div>
            </div>
            <div className={style.location}>
                <div className={style.country}>{'props.user.location.country'}</div>
                <div className={style.city}>{'props.user.location.city'}</div>
            </div>
        </div>
    </div>
}

export default User