import nav from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.list}>
        <li className={nav.item}>
          <a href="#" className={nav.link}>
            Profile
          </a>
        </li>
        <li className={nav.item}>
          <a href="#" className={`${nav.link} ${nav.active}`}>
            Messages
          </a>
        </li>
        <li className={nav.item}>
          <a href="#" className={nav.link}>
            News
          </a>
        </li>
        <li className={nav.item}>
          <a href="#" className={nav.link}>
            Music
          </a>
        </li>
        <li className={nav.item}>
          <a href="#" className={nav.link}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
