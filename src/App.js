import React from "react";
import Home from "./components/Home";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Story from "./components/Story.js"
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <Story />
      <Footer />
      <Home />
    </>
  );
}

export default App;
