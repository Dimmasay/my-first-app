import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUserTC, getStatusTC, updateStatusTC} from "../../redux/reducerProfile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";

class ContainerWrapper extends React.Component {
    componentDidMount() {
        let userId = this.props.match.userId    //"userId "this name taken from App, path='/profile/:userId'
        if (!userId){
            userId = this.props.id
        }
        this.props.getStatusTC(userId)
        this.props.getProfileUserTC(userId)
    }

    render() {
        return (<Profile {...this.props}/>)
    }
};
let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        status: state.profilePage.status,
        id: state.auth.id
    }
}

let ProfileContainer = compose(
    connect(mapStateToProps, {
        getProfileUserTC, getStatusTC, updateStatusTC
    }),
    withAuthRedirect,
    withRouter,
)(ContainerWrapper)
export default ProfileContainer
