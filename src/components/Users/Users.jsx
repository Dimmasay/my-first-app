import style from './Users.module.css'
debugger
const Users = ((props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"',
                    followed: false,
                    fullName: 'Dmytro',
                    status: 'I am looking',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"',
                    followed: true,
                    fullName: 'Kolya',
                    status: 'I am looking',
                    location: {country: 'Ukraine', city: 'Kiev'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"',
                    followed: false,
                    fullName: 'Tanya',
                    status: 'I am looking',
                    location: {country: 'Poland', city: 'Lodz'}
                }
            ]
        )
    }
    debugger

    return <div>
        {
            (props.users.map((user) => {

                return <div className={style.container}>
                    <div className={style.prew}>
                        <div className={style.image}>
                            <img/>
                        </div>
                        {user.followed
                            ? <button
                                onClick={() => {
                                    props.unFollowUser(user.id)
                                }}
                                className={style.button}
                                type='button'>Unfollow</button>
                            : <button
                                onClick={() => {
                                    props.followUser(user.id)
                                }}
                                className={style.button}
                                type='button'>Follow</button>
                        }
                    </div>
                    <div className={style.body}>
                        <div className={style.person}>
                            <div className={style.fullname}>{user.fullName}</div>
                            <div className={style.status}>{user.status}</div>
                        </div>
                        <div className={style.location}>
                            <div className={style.country}>{user.location.country}</div>
                            <div className={style.city}>{user.location.city}</div>
                        </div>
                    </div>
                </div>
            }))
        }
    </div>

})

export default Users