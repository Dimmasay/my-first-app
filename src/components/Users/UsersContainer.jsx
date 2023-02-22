import {connect} from "react-redux";
import {
    followAC, followProcessAC,
    isFetchingToggleAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users";
import {getUsersAPI} from "../../api/api";


class UsersContainerApi extends React.Component {

    componentDidMount() {
        this.props.isFetchingToggle(true)
        getUsersAPI(this.props.count, this.props.page)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.setItems(data.totalCount)
                this.props.isFetchingToggle(false)
            })
    }

    setPageNumber = (page) => {

        this.props.setPage(page)
        this.props.isFetchingToggle(true)
        getUsersAPI(this.props.count, page)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.isFetchingToggle(false)
            })
    }

    render() {

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
        followingProcessOnUsers:state.usersPage.followingProcessOnUsers
    }
}

const UsersContainer = connect(mapStateToProps, {
    // followUser: (userId) => {
    //     dispatch(followAC(userId))
    // },
    followUser: followAC,
    unFollowUser: unfollowAC,
    setUsers: setUsersAC,
    setPage: setCurrentPageAC,
    setItems: setTotalCountAC,
    isFetchingToggle: isFetchingToggleAC,
    followProcess: followProcessAC
})(UsersContainerApi)

export default UsersContainer

