import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {getAuthMeTC} from "../../redux/reducerAuth";


class HeaderContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getAuthMeThunk()
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

const HeaderContainer = connect(mapStateToProps, {
    getAuthMeThunk: getAuthMeTC,
})(HeaderContainerAPI);

export default HeaderContainer
