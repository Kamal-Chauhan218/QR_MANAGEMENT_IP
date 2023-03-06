import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ContactUsScreen from "./screens/ContactUsScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import GenerateQRScreen from "./screens/GenerateQRScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}></Route>
        <Route path="/contacts" element={<ContactUsScreen/>}></Route>
        <Route path="/facilities" element={<GenerateQRScreen/>}></Route>
        <Route path="/login" element={<LoginScreen/>}></Route>
        <Route path="/signup" element={<SignUpScreen/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
