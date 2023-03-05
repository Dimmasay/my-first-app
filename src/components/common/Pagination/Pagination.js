import style from './Pagination.module.css'
import React from "react";

const Pagination = (props) => {

    let totalPages = Math.ceil(props.totalCount / props.count)
    let arrayNumbers = []
    //50 = totalPages !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (let p = 1; p <= totalPages && p <= 50; ++p) {
        arrayNumbers.push(p)
    }
    let arrayPageNumbers = arrayNumbers.map((page => {
        return (<div
                className={props.page === page
                    ? `${style.pageNumber} ${style.pageNumberSelected}`
                    : style.pageNumber}
                onClick={(e) => {
                    props.setPage(page)
                }}>{page}</div>
        )
    }))
    let setNextPage = () => {
        if (props.page < totalPages) {
            let currentPage = props.page + 1
            props.setPage(currentPage)
        }

    }
    let setPrevPage = () => {
        if (1 < props.page) {
            let currentPage = props.page - 1
            props.setPage(currentPage)
        }
    }

    return (
        <div className={style.pagination}>
            <div className={style.container}>
                <button className={style.button}
                        onClick={setPrevPage}>Prev
                </button>
                <div className={style.pagesList}>
                    {arrayPageNumbers}
                </div>
                <button className={style.button}
                        onClick={setNextPage}>Next
                </button>
            </div>
        </div>
    )
}

export default Pagination