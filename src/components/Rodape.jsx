import React from 'react';
import pc from '../assets/images/image-retro-pcs.jpg';
import laptop from '../assets/images/image-top-laptops.jpg';
import gaming from '../assets/images/image-gaming-growth.jpg';

const RodapeNews = () => {
  return (
    <article className="rodape container">
      <ul>
        <li>
          <div>
            <img src={pc} alt="PC retrô" />
          </div>
          <div>
            <h1>01</h1>
            <a href="#">
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given modern upgrades</p>
            </a>
          </div>
        </li>
        <li>
          <div>
            <img src={laptop} alt="Laptop" />
          </div>
          <div>
            <h1>02</h1>
            <a href="#">
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our besy picks forvarious needs and budgets</p>
            </a>
          </div>
        </li>
        <li>
          <div>
            <img src={gaming} alt="Gaming" />
          </div>
          <div>
            <h1>03</h1>
            <a href="#">
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities</p>
            </a>
          </div>
        </li>
      </ul>
    </article>
  );
};

export default RodapeNews;
