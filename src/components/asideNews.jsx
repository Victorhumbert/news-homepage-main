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
    <aside className="col-start-3 row-span-1 row-start-1 row-end-3 grid content-start items-start justify-self-start bg-azulEscuro p-8 max-md:col-start-1 max-md:row-start-4 max-md:row-end-5 max-md:mx-4">
      <h2 className=" text mb-4 text-5xl font-semibold text-secundaria">New</h2>
      <ul className=" grid gap-10 divide-y divide-azulCinzaEscuro">
        {news.map(({ title, content }) => (
          <li key={title} className="pt-10">
            <a
              className="text-branco duration-300 hover:text-secundaria"
              href={`#${title}`}
            >
              <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
              <p className="text-lg text-azulCinza">{content}</p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideNews;
