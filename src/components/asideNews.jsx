import React from 'react';

const AsideNews = () => {
  return (
    <aside>
      <h2>New</h2>
      <ul>
        <li>
          <a href="#">
            <h3>Hydrogen VS Eletric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible advrese effects of on-demand AI image
              generation?
            </p>
          </a>
        </li>
        <li>
          <a href="#">
            <h3>Is VS Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default AsideNews;
