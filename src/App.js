import { RouterOutlined } from "@mui/icons-material";
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
import Profile from "./components/profile/Profile";
import NewPost from "./components/newPost/NewPost";
import EditProfile from "./components/profile/EditProfile";
import Friends from "./components/Friends";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="newPost" element={<NewPost />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="friends" element={<Friends />} />
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
