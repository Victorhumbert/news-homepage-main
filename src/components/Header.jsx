import React from "react";
import logo from "../assets/images/logo.svg";
import menuAbrir from "../assets/images/icon-menu.svg";
import menuFechar from "../assets/images/icon-menu-close.svg";

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [menuMobile, setMenuMobile] = React.useState(null);

  function handleMenu() {
    console.log("ativo");
    if (!menuMobile) {
      setMenu(
        <img
          className="menu fechar"
          src={menuFechar}
          onClick={handleMenu}
          alt="Menu"
        />,
      );
      setMenuMobile("ativo");
    } else if (menuMobile === "ativo") setMenuMobile(null);
  }

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setMenu(
        <img
          className="menu"
          src={menuAbrir}
          onClick={handleMenu}
          alt="Menu"
        />,
      );
    } else {
      setMenu(false);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  window.removeEventListener("resize", handleResize);

  return (
    <header className="container">
      <div>
        <a href="/">
          <img src={logo} alt="Foto capa" />
        </a>
      </div>
      <nav>
        {menu}
        <ul className={menuMobile}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
