import style from './Users.module.css'
import User from "./User/User";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../common/Pagination/Pagination";


const Users = (props) => {

    let usersList = props.users.map((user) => {
        return (<User user={user}
                      followingProcessOnUsers={props.followingProcessOnUsers}
                      followUserTC={props.followUserTC}
                      unFollowUserTC={props.unFollowUserTC}/>
        )
    })


    return <div className={style.container}>
        <div className={style.userList}>
            <Pagination totalCount={props.totalCount}
                        count={props.count}
                        page={props.page}
                        setPage={props.setPage}/>
            <Preloader isFetching={props.isFetching}/>
            {usersList}
        </div>
    </div>

}


export default Users