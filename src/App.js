import React from "react";
import Home from "./components/Home";
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
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> 
          <Route path="explore" element={<Explore />} />
          <Route path="profile" element={<Profile />} />
          <Route path="message" element={<Message />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
