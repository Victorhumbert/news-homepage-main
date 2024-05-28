import React from "react";
import capa from "../assets/images/image-web-3-desktop.jpg";
import AsideNews from "./asideNews";
const MainNews = () => {
  return (
    <main className="container grid grid-cols-3 gap-8 max-sm:grid-cols-1">
      <div className="col-span-2 max-sm:col-span-1 max-sm:mx-4">
        <img src={capa} alt="Imagem capa" />
      </div>

      <h1 className="text-7xl font-semibold max-sm:mx-4 max-sm:text-5xl">
        The Bright Future of Web 3.0?
      </h1>
      <article className="grid gap-8 max-sm:mx-4 max-sm:mb-8">
        <p className="text-azulCinzaEscuro text-2xl">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a
          href="#"
          className="bg-primaria text-branco hover:bg-azulEscuro self-end justify-self-start px-16 py-4 text-xl font-medium tracking-widest duration-300"
        >
          READ MORE
        </a>
      </article>
      <AsideNews />
    </main>
  );
};

export default MainNews;
