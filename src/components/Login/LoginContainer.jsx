import style from './Login.module.css'

import {connect} from "react-redux";
import React from "react";
import LoginForm from "./LoginForm";
import {authLoginTC, authOutLoginTC, goOutAC} from "../../redux/reducerAuth";

class LoginWrapper extends React.Component {
    render() {
        return (
            <div>
                <LoginForm {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const LoginContainer = connect(mapStateToProps, {authLoginTC,authOutLoginTC})(LoginWrapper)
export default LoginContainer