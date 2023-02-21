import header from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={header.header}>
            <div className={header.logo}>
                <img src="https://simg.nicepng.com/png/small/146-1460942_logo-png-logo-lego.png"/>
            </div>
            <NavLink className={header.loginBlock} to='login'>
                {props.auth.isAuth ?props.auth.login :'Login' }
            </NavLink>
        </header>
    );
};

export default Header;
