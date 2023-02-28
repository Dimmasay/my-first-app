import nav from "./NavBar.module.css";
import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";


class NavBarWrapper extends React.Component {
    render() {
        return (
            <NavBar {...this.props}/>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        id: state.auth.id
    }
}
const NavBarContainer = connect(mapStateToProps, {})(NavBarWrapper)
export default NavBarContainer;
