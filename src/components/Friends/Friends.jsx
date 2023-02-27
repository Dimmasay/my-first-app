import Friend from "./Friend/Friend";
import style from './Friends.module.css'


const Friends = (props) => {
    debugger
    let userList = props.followers.map((user) => {
        return (
            <Friend user={user}/>
        )
    })

    let quantityPages = Math.ceil(props.totalCount / props.count)
    let getNumbers = []
    for (let i = 1; i <= quantityPages; i++) {
        getNumbers.push(i)
    }


    let getNumbersPage = getNumbers.map((number) => {
        return (
            <div className={props.page === number ? `${style.number} ${style.numberSelected}` : style.number}
                 onClick={() => {
                     props.setPage(number)
                 }}>
                {number}
            </div>)
    })

    let setNextPage = () => {
        if(props.page < quantityPages) {
            let currentPage = props.page + 1
            props.setPage(currentPage)
        }

    }
    let setPrevPage = () => {
        if(1 < props.page) {
            let currentPage = props.page - 1
            props.setPage(currentPage)
        }

    }
    return (
        <div className={style.list}>
            <div className={style.numberList}>
                <div className={style.button}
                onClick={setPrevPage}>Prev</div>
                {getNumbersPage}
                <div className={style.button}
                onClick={setNextPage}>Next</div>
            </div>
            {userList}
        </div>
    )

}

export default Friends