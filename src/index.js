import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Ma from "./Components/Ma";
import { HashRouter,Link } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  <HashRouter basename="/">

  <App/>
  <Routes>
    <Route path="/" element={<Home/>} />  
      <Route path="/Home" element={<Home/>} />  
      <Route path="/Ma" element={<Ma/>} />  
      <Route path="/Nav" element={<Nav/>} /> 
      <Route path="/About" element={<About/>} /> 
      <Route path="/Contact" element={<Contact/>} /> 
  </Routes>
   </HashRouter> 

  
// </BrowserRouter>,
);

reportWebVitals();