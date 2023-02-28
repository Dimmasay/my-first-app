import {connect} from "react-redux";
import React from "react";
import Friends from "./Friends";
import {setCurrentPageTC, setMyFollowersTC} from "../../redux/reducerFriends";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class FriendsWrapper extends React.Component {
    componentDidMount = () => {
        this.props.setMyFollowersTC(this.props.count, this.props.page)
    }
    setPage = (page)  => {
        this.props.setCurrentPageTC(this.props.count, page)
    }
    render() {
        return <Friends {...this.props} setPage={this.setPage}/>
    }
}

const mapStateToProps = (state) => {
    return {
        followers: state.friendsPage.followers,
        page : state.friendsPage.page,
        count: state.friendsPage.count,
        totalCount: state.friendsPage.totalCount,

    }
}


const FriendsContainer = compose(
    connect(mapStateToProps, {
        setMyFollowersTC,
        setCurrentPageTC,
    }),
    withAuthRedirect
)(FriendsWrapper)
export default FriendsContainer