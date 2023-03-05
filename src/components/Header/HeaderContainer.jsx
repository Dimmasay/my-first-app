import {connect} from "react-redux";
import React from "react";
import Header from "./Header";


class HeaderContainerAPI extends React.Component {
    render() {
        return (<Header {...this.props}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const HeaderContainer = connect(mapStateToProps, {})(HeaderContainerAPI);

export default HeaderContainer
