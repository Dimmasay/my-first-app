import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {getProfileUserTC} from "../../redux/reducerProfile";

class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.match.userId    //"userId "this name taken from App, path='/profile/:userId'
        this.props.getProfileUserThunk(userId)
        // profileAPI.getProfileUser(userId)
        //     .then((response) => {
        //         this.props.setUser(response.data)
        //     })
    }

    render() {
        return (<Profile {...this.props}/>)

    }
};
let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user
    }
}

function withRouter(Component) {
    return (props) => {
        return <Component {...props} match={useParams()}/>
    }
}

const ProfileContainer = connect(mapStateToProps, {
    getProfileUserThunk: getProfileUserTC
})(withRouter(ProfileContainerAPI));


export default ProfileContainer
