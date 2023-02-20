import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import {setUserProfileAC} from "../../redux/reducerProfile";

class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then((response) => {
                this.props.setUser(response.data)
            })
    }

    render() {
        debugger
        return (<Profile {...this.props}/>)
    }
};
let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user
    }
}

const ProfileContainer = connect(mapStateToProps, {
    setUser: setUserProfileAC
})(ProfileContainerAPI);


export default ProfileContainer
