import { RouterOutlined } from "@mui/icons-material";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Post from "./components/Post";
import Posts from "./components/Posts";
import Profile from "./components/Profile";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Posts />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Posts" element={<Posts/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
