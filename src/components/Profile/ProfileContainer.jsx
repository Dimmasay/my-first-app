import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getProfileUserTC,
    getStatusTC,
    updatePhotoTC,
    updateProfileTC,
    updateStatusTC
} from "../../redux/reducerProfile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";

let ContainerWrapper = (props) => {
    useEffect(() => {
            let userId = props.match.userId    //"userId "this name taken from App, path='/profile/:userId'
            props.getStatusTC(userId)
            props.getProfileUserTC(userId)
        },
        [props.match.userId])


    let isOwner = (parseInt(props.match.userId) === props.id) //changed type 'match.userId' from string to number, make boolean

    return (<Profile {...props} isOwner={isOwner}/>)

};
let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        status: state.profilePage.status,
        id: state.auth.id,
    }
}

let ProfileContainer = compose(
    connect(mapStateToProps, {
        getProfileUserTC, getStatusTC, updateStatusTC, updatePhotoTC, updateProfileTC
    }),
    withAuthRedirect,
    withRouter,
)(ContainerWrapper)
export default ProfileContainer
