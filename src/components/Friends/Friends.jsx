import Friend from "./Friend/Friend";
import style from './Friends.module.css'
import Pagination from "../common/Pagination/Pagination";
import React from "react";


const Friends = (props) => {
    let userList = props.followers.map((user) => {
        return (
            <Friend user={user}/>
        )
    })


    return (
        <div className={style.list}>
            <Pagination totalCount={props.totalCount}
                        count={props.count}
                        page={props.page}
                        setPage={props.setPage}
            />
            {userList}
        </div>
    )

}

export default Friends