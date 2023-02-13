import nav from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import BestFriends from "./BestFriends/BestFriends";

const setActive = (link) => link.isActive ? `${nav.link} ${nav.active}` : nav.link

const NavBar = (props) => {
    return (
        <nav className={nav.nav}>
            <ul className={nav.list}>
                <li className={nav.item}>
                    <NavLink to="/profile" className={setActive}>
                        Profile
                    </NavLink>
                </li>
                <li className={nav.item}>
                    <NavLink to="/dialogs" className={setActive}>
                        Messages
                    </NavLink>
                </li>
                <li className={nav.item}>
                    <NavLink to="/news" className={setActive}>
                        News
                    </NavLink>
                </li>
                <li className={nav.item}>
                    <NavLink to="/music" className={setActive}>
                        Music
                    </NavLink>
                </li>
                <li className={nav.item}>
                    <NavLink to="/settings" className={setActive}>
                        Settings
                    </NavLink>
                </li>
                <li className={`${nav.item} ${nav.itemFriend}`}>
                    <NavLink to="/friends" className={setActive}>
                        Friends
                    </NavLink>
                    <BestFriends friends={props.navbar.friends}/>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
