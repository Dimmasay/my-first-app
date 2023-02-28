import style from './Login.module.css'

import {connect} from "react-redux";
import React from "react";
import LoginForm from "./LoginForm";
import {authLoginTC, authOutLoginTC, goOutAC} from "../../redux/reducerAuth";

class LoginWrapper extends React.Component {
    render() {
        return (
            <div>
                <h2 className={style.title}>Login Form</h2>
                <LoginForm {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {

    }
}

const LoginContainer = connect(mapStateToProps, {authLoginTC,authOutLoginTC})(LoginWrapper)
export default LoginContainer