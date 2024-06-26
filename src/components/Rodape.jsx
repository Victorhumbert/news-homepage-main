import React from "react";
import pc from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";

const artigos = [
  {
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades",
    id: "01",
    img: pc,
  },
  {
    title: "Top 10 Laptops of 2022",
    content: "Our besy picks forvarious needs and budgets",
    id: "02",
    img: laptop,
  },
  {
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities",
    id: "03",
    img: gaming,
  },
];

const RodapeNews = () => {
  return (
    <article className="container mt-16">
      <ul className="flex gap-8 max-md:mx-4 max-md:grid max-md:justify-start">
        {artigos.map(({ title, content, id, img }) => (
          <li key={id} className="flex gap-5">
            <div className="flex">
              <img src={img} alt={title} className=" object-cover" />
            </div>
            <div className="flex-1">
              <h1 className="mb-3 text-5xl font-semibold text-azulCinza">
                {id}
              </h1>
              <a
                href={`#${title}`}
                className="text-2xl text-azulEscuro duration-300 hover:text-primaria "
              >
                <h2 className="mb-4 font-semibold">{title}</h2>
                <p className=" text-xl text-azulCinzaEscuro">{content}</p>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default RodapeNews;
