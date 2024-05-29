import React from "react";
import capa from "../assets/images/image-web-3-desktop.jpg";
import AsideNews from "./asideNews";
const MainNews = () => {
  return (
    <main className="container grid grid-cols-3 gap-8 max-md:grid-cols-1">
      <div className="col-span-2 max-md:col-span-1 max-md:mx-4">
        <img src={capa} alt="Imagem capa" />
      </div>

      <h1 className="text-7xl font-semibold max-md:mx-4 max-md:text-5xl">
        The Bright Future of Web 3.0?
      </h1>
      <article className="grid gap-8 max-md:mx-4 max-md:mb-8">
        <p className="text-2xl text-azulCinzaEscuro">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a
          href="#"
          className="self-end justify-self-start bg-primaria px-16 py-4 text-xl font-medium tracking-widest text-branco duration-300 hover:bg-azulEscuro"
        >
          READ MORE
        </a>
      </article>
      <AsideNews />
    </main>
  );
};

export default MainNews;
