import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import axios from "axios";
import {setAuthUserDataAC} from "../../redux/reducerAuth";

class HeaderContainerAPI extends React.Component {

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((response) => {
                let {id, login, email} = response.data.data
                this.props.auth.isAuth = true
                this.props.setAuthUserDataAC(id, login, email)
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                    .then((response) => {

                    })
            })
    }

    render() {
        return (<Header {...this.props}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const HeaderContainer = connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainerAPI);

export default HeaderContainer
