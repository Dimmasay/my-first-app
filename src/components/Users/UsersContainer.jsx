import {connect} from "react-redux";
import {
    followAC,
    isFetchingToggleAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/reducerUsers";
import React from "react";
import axios from "axios";
import Users from "./Users";


class UsersContainerApi extends React.Component {

    componentDidMount() {
        this.props.isFetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`, {
            withCredentials: true
        })
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setItems(response.data.totalCount)
                this.props.isFetchingToggle(false)
            })
    }

    setPageNumber = (page) => {

        this.props.setPage(page)
        this.props.isFetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${page}`, {
            withCredentials: true
        })
            .then((response) => {
                this.props.setUsers(response.data.items)
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
    isFetchingToggle: isFetchingToggleAC
})(UsersContainerApi)

export default UsersContainer

