import React from "react";
import Home from "./components/Home";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Register from "./components/Register"
import '../src/styles/Main.scss'
import Login from "./components/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> 
          <Route path="explore" element={<Explore />} />
          <Route path="profile" element={<Profile />} />
          <Route path="message" element={<Message />} /> */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
