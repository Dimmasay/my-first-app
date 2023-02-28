import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {getProfileUserTC, getStatusTC, updateStatusTC} from "../../redux/reducerProfile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ContainerWrapper extends React.Component {

    componentDidMount() {
        let userId = this.props.match.userId    //"userId "this name taken from App, path='/profile/:userId'
        this.props.getStatusTC(userId)
        this.props.getProfileUserThunk(userId)

    }

    render() {
        return (<Profile {...this.props}/>)

    }
};
let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        status: state.profilePage.status,
    }
}

function withRouter(Component) {
    return (props) => {
        return <Component {...props} match={useParams()}/>
    }
}


let ProfileContainer = compose(
    connect(mapStateToProps, {
        getProfileUserThunk: getProfileUserTC,
        getStatusTC,
        updateStatusTC
    }),
    withAuthRedirect,
    withRouter,
)(ContainerWrapper)
export default ProfileContainer
