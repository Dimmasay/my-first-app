import {connect} from "react-redux";
import {
    followAC, followProcessAC, followUserTC,
    isFetchingToggleAC,
    setCurrentPageAC, setPageTC,
    setTotalCountAC,
    setUsersTC,
    unfollowAC, unFollowUserTC
} from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users";
import {Navigate} from "react-router-dom";




class UsersContainerApi extends React.Component {
    componentDidMount() {
         this.props.setUsersThunk(this.props.count, this.props.page)
    }
    setPageNumber = (page) => {
        this.props.setPageThunk(this.props.count, page)
    }

    render() {
        if(!this.props.isAuth){
            return <Navigate to='/login'/>
        }

        return (
            <Users
                users={this.props.users}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
                totalCount={this.props.totalCount}
                count={this.props.count}
                page={this.props.page}
                setPageNumber={this.setPageNumber}
                isFetching={this.props.isFetching}
                followProcess={this.props.followProcess}
                followingProcessOnUsers={this.props.followingProcessOnUsers}
                followUserThunk={this.props.followUserThunk}
                unFollowUserThunk={this.props.unFollowUserThunk}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        count: state.usersPage.count,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
        followingProcessOnUsers:state.usersPage.followingProcessOnUsers,
        isAuth:state.auth.isAuth
    }
}

const UsersContainer = connect(mapStateToProps, {
    // followUser: (userId) => {
    //     dispatch(followAC(userId))
    // },
    followAC: followAC,
    unFollowUser: unfollowAC,
    setCurrentPage: setCurrentPageAC,
    setTotalCount: setTotalCountAC,
    isFetchingToggle: isFetchingToggleAC,
    followProcess: followProcessAC,
    setUsersThunk: setUsersTC,
    setPageThunk: setPageTC,
    followUserThunk: followUserTC,
    unFollowUserThunk: unFollowUserTC,
})(UsersContainerApi)

export default UsersContainer

