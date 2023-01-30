import header from "./Header.module.css";

const Header = () => {
  return (
    <header className={header.header}>
      <div className={header.logo}>
        <img src="https://simg.nicepng.com/png/small/146-1460942_logo-png-logo-lego.png" />
      </div>
    </header>
  );
};

export default Header;
