import React from "react";
import logo from "../assets/images/logo.svg";
import menuAbrir from "../assets/images/icon-menu.svg";
import menuFechar from "../assets/images/icon-menu-close.svg";

const menuLinks = [
  {
    title: "Home",
  },
  {
    title: "New",
  },
  {
    title: "Popular",
  },
  {
    title: "Trending",
  },
  {
    title: "Categories",
  },
];

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  function toggleMenu() {
    setMenuMobile(!menuMobile);
  }

  return (
    <header className="container flex items-center justify-between p-10">
      <div>
        <a href="/">
          <img src={logo} alt="Foto capa" />
        </a>
      </div>
      <nav>
        <button className="relative z-10 md:hidden" onClick={toggleMenu}>
          <img
            src={menuMobile ? menuFechar : menuAbrir}
            alt="Menu"
            className="cursor-pointer"
          />
        </button>
        <ul
          className={`flex gap-8 duration-300 max-md:fixed max-md:-right-full max-md:top-0 max-md:grid max-md:h-screen max-md:w-3/4 max-md:content-start max-md:bg-white max-md:p-5 max-md:pt-16 max-md:text-xl ${!menuMobile ? "max-md:grid" : "max-md:right-0 "}`}
        >
          {menuLinks.map(({ title }) => (
            <li key={title}>
              <a
                href={`#${title}`}
                className="p-1.5 text-xl text-azulCinzaEscuro duration-300 hover:text-primaria"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
