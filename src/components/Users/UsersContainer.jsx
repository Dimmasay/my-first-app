import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/reducerUsers";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        count: state.usersPage.count,
        page: state.usersPage.page,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId))
        },
        unFollowUser: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setItems: (items) => {
            dispatch(setTotalCountAC(items))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer

