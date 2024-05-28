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
          className="relative z-10 grid cursor-pointer"
          src={menuFechar}
          onClick={handleMenu}
          alt="Menu"
        />,
      );
      setMenuMobile("ativo");
    } else if (menuMobile === "ativo") setMenuMobile(null);
  }

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setMenu(
        <img
          className="grid cursor-pointer"
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
    <header className="container flex items-center justify-between p-10">
      <div>
        <a href="/">
          <img src={logo} alt="Foto capa" />
        </a>
      </div>
      <nav>
        {menu}
        <ul
          className={`${menuMobile} flex gap-8 max-md:-right-full max-sm:fixed max-sm:top-0 max-sm:grid max-sm:h-screen max-sm:w-3/4 max-sm:content-start max-sm:gap-8 max-sm:bg-white max-sm:p-5 max-sm:pt-16 max-sm:text-xl md:gap-2.5`}
        >
          <li>
            <a
              href="#"
              className="text-azulCinzaEscuro hover:text hover:text-primaria p-1.5 duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-azulCinzaEscuro hover:text hover:text-primaria p-1.5 duration-300"
            >
              New
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-azulCinzaEscuro hover:text hover:text-primaria p-1.5 duration-300"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-azulCinzaEscuro hover:text hover:text-primaria p-1.5 duration-300"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-azulCinzaEscuro hover:text hover:text-primaria p-1.5 duration-300"
            >
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
