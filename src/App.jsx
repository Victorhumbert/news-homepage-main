import React from "react";
import Header from "./components/Header";
import MainNews from "./components/MainNews";
import RodapeNews from "./components/Rodape";
import "../style.css";

const App = () => {
  return (
    <>
      <Header />
      <MainNews />
      <RodapeNews />
    </>
  );
};

export default App;
