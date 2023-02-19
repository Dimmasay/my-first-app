import style from './Users.module.css'
import User from "./User/User";
import axios from "axios";
const Users = ((props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    props.setUsers(response.data.items)

                })
        }
    }

    let UserList = props.users.map((user) => {
        debugger
        return (<User user={user} followUser={props.followUser} unFollowUser={props.unFollowUser}/>)
    })

    return <div className={style.container}>
        <div className={style.userList}>
            <button onClick={getUsers}>Get Users</button>
            {UserList}
        </div>
    </div>

})



export default Users