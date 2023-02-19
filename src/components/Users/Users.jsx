import style from './Users.module.css'
import User from "./User/User";
import axios from "axios";
import React from "react";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setItems(response.data.totalCount)
            })
    }

    setPageNumber = (page) => {

        this.props.setPage(page)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${page}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let userList = this.props.users.map((user) => {
            return (<User user={user} followUser={this.props.followUser} unFollowUser={this.props.unFollowUser}/>)
        })

        let totalPages = Math.ceil(this.props.totalCount / this.props.count)
        let pageNumberArray = []

        //50 = totalPages !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        for (let p = 1; p <= 50; ++p) {
            pageNumberArray.push(p)
        }

        let pageNumberList = pageNumberArray.map((page => {
            return (<div
                className={this.props.page === page ? `${style.pageNumber} ${style.pageNumberSelected}` : style.pageNumber}
                onClick={(e) => {
                    this.setPageNumber(page)
                }}>{page}</div>)
        }))


        return <div className={style.container}>
            <div className={style.userList}>
                <div className={style.pagesList}>
                    {pageNumberList}
                </div>
                {userList}
            </div>
        </div>
    }
}

export default Users