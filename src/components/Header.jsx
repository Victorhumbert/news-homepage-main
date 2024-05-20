import React from 'react';
import logo from '../assets/images/logo.svg';
const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <img src={logo} alt="Foto capa" />
        </a>
      </div>
      <nav>
        <ul>
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
