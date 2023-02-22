import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {setAuthUserDataAC} from "../../redux/reducerAuth";
import {getAuthMeAPI} from "../../api/api";

class HeaderContainerAPI extends React.Component {

    componentDidMount() {

        getAuthMeAPI()
            .then((data) => {
                let {id, login, email} = data.data
                this.props.auth.isAuth = true
                this.props.setAuthUserDataAC(id, login, email)
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
