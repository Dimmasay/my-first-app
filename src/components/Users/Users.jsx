import style from './Users.module.css'
import User from "./User/User";
import axios from "axios";
import React from "react";


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let userList = this.props.users.map((user) => {
            return (<User user={user} followUser={this.props.followUser} unFollowUser={this.props.unFollowUser}/>)
        })

        return <div className={style.container}>
            <div className={style.userList}>
                {userList}
            </div>
        </div>
    }
}

export default Users