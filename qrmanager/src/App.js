import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home/Home'
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Qr from "./components/Qr";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/facilities" element={<Qr/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
