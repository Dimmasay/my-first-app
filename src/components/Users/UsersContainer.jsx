import {connect} from "react-redux";
import {
    followUserTC, setPageTC,
    setUsersTC, unFollowUserTC
} from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCount,
    getFollowingProcessOnUsers,
    getIsFetching,
    getPage,
    getTotalCount,
    getUsersSelector
} from "../../redux/redux-selectors";


class WrapperUsers extends React.Component {
    componentDidMount() {
        this.props.setUsersTC(this.props.count, this.props.page)
    }
    setPage = (page) => {
        this.props.setPageTC(this.props.count, page)
    }

    render() {
        return (
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                count={this.props.count}
                page={this.props.page}
                isFetching={this.props.isFetching}
                followingProcessOnUsers={this.props.followingProcessOnUsers}
                setPage={this.setPage}
                followUserTC={this.props.followUserTC}
                unFollowUserTC={this.props.unFollowUserTC}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state), //using selectors
        totalCount: getTotalCount(state),
        count: getCount(state),
        page: getPage(state),
        isFetching: getIsFetching(state),
        followingProcessOnUsers: getFollowingProcessOnUsers(state),
    }
}

const UsersContainer = compose(
    connect(mapStateToProps, {
        setUsersTC, setPageTC,
        followUserTC, unFollowUserTC,
    }),
    withAuthRedirect,
)(WrapperUsers)
export default UsersContainer

