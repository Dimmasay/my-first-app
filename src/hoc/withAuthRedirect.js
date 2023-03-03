import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return ((this.props.isAuth)
                    ? <Component {...this.props}/>
                    : <Navigate to='/login'/>
            )
        }


    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
            initialized: state.app.initialized

        }
    }
    const ConnectedRedirectComponent = connect(mapStateToProps, {})(RedirectComponent)

    return ConnectedRedirectComponent
}

