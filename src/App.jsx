import React from 'react';
import Header from './components/Header';
import '../style.css';

function codigo() {
  return (
    <body>
      <p>The Bright Future of Web 3.0?</p>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <p>
        Read more New Hydrogen VS Electric Cars Will hydrogen-fueled cars ever
        catch up to EVs? The Downsides of AI Artistry What are the possible
        adverse effects of on-demand AI image generation?
      </p>
      <p>Is VC Funding Drying Up?</p>
      <p>Private funding by VC firms is down 50% YOY. We take a look at</p>
      <p>what that means.</p>
      <p> 01</p>
      <p>Reviving Retro PCs</p>
      <p>What happens when old PCs are given modern upgrades?</p>
      <p>02</p>
      <p>Top 10 Laptops of 2022</p>
      <p>Our best picks for various needs and budgets.</p>
      <p>03</p>
      <p>The Growth of Gaming</p>
      <p>How the pandemic has sparked fresh opportunities. </p>
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
      ;
    </body>
  );
}

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default App;
