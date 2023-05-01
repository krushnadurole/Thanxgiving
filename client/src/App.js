import { Routes,Route,BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import  Features  from "./components/Features";
import Allelements from "./components/Requirements/Allelements"
import "./App.css";
import Elementstate from "./Context/Element/ElementState";
import DashBoard from './components/Dashboard'
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import AddReq from "./components/Requirements/AddReq";
import GetFilteredElements from './components/Requirements/GetFilteredElements';
import NotFound from './components/NotFound'
const App = () => {
  return (
    <div>
      <Elementstate>

        <BrowserRouter>
        <Navbar />
        <div className="container">
            <Routes>
              <Route exact path = "/" element = {<DashBoard/>}/>
              <Route exact path = "/login" element={<Login/>}/>
              <Route exact path = "/signup" element={<SignUp/>}/>
              <Route exact path ="/allele" element={<Allelements/>}/>
              <Route exact path = "/addreq" element={<AddReq/>}/>
              <Route exact path = "/features" element={<Features/>}/>
              <Route exact path = "/getfiltered" element={<GetFilteredElements/>}/>
              <Route exact path = "*" element={<NotFound/>}/>
            </Routes>
        </div>
        </BrowserRouter>
      </Elementstate>
    </div>
  );
};

export default App;