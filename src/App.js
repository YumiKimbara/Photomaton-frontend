import React from "react";
import Home from "./components/Home";
import Header from "./components/Header.js"
import Story from "./components/Story.js"
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Header/>
      <Story/>
      <Home />
    </>
  );
}

export default App;
