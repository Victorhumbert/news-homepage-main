import React from 'react';
import capa from '../assets/images/image-web-3-desktop.jpg';
import AsideNews from './asideNews';
const MainNews = () => {
  return (
    <main className="main-news container">
      <div>
        <img src={capa} alt="Imagem capa" />
      </div>

      <h1>The Bright Future of Web 3.0?</h1>
      <article>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a href="#">READ MORE</a>
      </article>
      <AsideNews />
    </main>
  );
};

export default MainNews;
