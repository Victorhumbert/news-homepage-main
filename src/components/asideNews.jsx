import React from "react";

const news = [
  {
    title: "Hydrogen VS Eletric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    content:
      "What are the possible advrese effects of on-demand AI image generation?",
  },
  {
    title: "Is VS Funding Drying Up?",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const AsideNews = () => {
  return (
    <aside className="bg-azulEscuro col-start-3 row-span-1 row-start-1 row-end-3 grid content-start items-start justify-self-start p-8 max-sm:col-start-1 max-sm:row-start-4 max-sm:row-end-5 max-sm:mx-4">
      <h2 className=" text-secundaria text mb-4 text-5xl font-semibold">New</h2>
      <ul className=" divide-azulCinzaEscuro grid gap-10 divide-y">
        {news.map(({ title, content }) => (
          <li key={title} className="pt-10">
            <a
              className="text-branco hover:text-secundaria duration-300"
              href={`#${title}`}
            >
              <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
              <p className="text-azulCinza text-lg">{content}</p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideNews;
