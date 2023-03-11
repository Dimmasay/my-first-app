import {connect} from "react-redux";
import React, {useEffect} from "react";
import Friends from "./Friends";
import {setCurrentPageTC, setMyFollowersTC} from "../../redux/reducerFriends";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const FriendsWrapper = (props) => {

    useEffect(() => {
        props.setMyFollowersTC(props.count, props.page)
    }, [])

    let setPage = (page) => {
        props.setCurrentPageTC(props.count, page)
    }

    return <Friends {...props} setPage={setPage}/>
}

const mapStateToProps = (state) => {

    return {
        followers: state.friendsPage.followers,
        page: state.friendsPage.page,
        count: state.friendsPage.count,
        totalCount: state.friendsPage.totalCount,
    }
}


const FriendsContainer = compose(
    connect(mapStateToProps, {
        setMyFollowersTC, setCurrentPageTC,
    }),
    withAuthRedirect
)(FriendsWrapper)
export default FriendsContainer