import style from './Users.module.css'
import User from "./User/User";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let userList = props.users.map((user) => {
        debugger
        return (
            <NavLink to={`/profile/${user.id}`}>
                <User user={user} followUser={props.followUser} unFollowUser={props.unFollowUser}/>
            </NavLink>
        )
    })

    let totalPages = Math.ceil(props.totalCount / props.count)
    let pageNumberArray = []

    //50 = totalPages !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (let p = 1; p <= 50; ++p) {
        pageNumberArray.push(p)
    }

    let pageNumberList = pageNumberArray.map((page => {
        return (<div
            className={props.page === page ? `${style.pageNumber} ${style.pageNumberSelected}` : style.pageNumber}
            onClick={(e) => {
                props.setPageNumber(page)
            }}>{page}</div>)
    }))


    return <div className={style.container}>
        <div className={style.userList}>
            <div className={style.pagesList}>
                {pageNumberList}
            </div>
                <Preloader isFetching={props.isFetching}/>
            {userList}
        </div>
    </div>

}


export default Users