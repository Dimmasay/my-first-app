import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import {setUserProfileAC} from "../../redux/reducerProfile";
import {useParams} from "react-router-dom";

class ProfileContainerAPI extends React.Component {

    componentDidMount() {

        let userId = this.props.match.userId    //"userId "this name taken from App, path='/profile/:userId'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUser(response.data)
                debugger
            })
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
    setUser: setUserProfileAC
})(withRouter(ProfileContainerAPI));


export default ProfileContainer
