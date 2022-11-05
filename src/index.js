import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Photo";
import Ma from "./Components/Ma";
import Rec from "./Components/Recipe";
import Erro from "./Components/Erro";
import Sigin from "./Sigin";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  <HashRouter basename="/">
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Erro" element={<Erro />} />
      <Route path="/Ma" element={<Ma />} />
      <Route path="/Nav" element={<Nav />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Sigin />} />
      <Route path="Rec" element={<Rec />} />
    </Routes>
  </HashRouter>

  // </BrowserRouter>,
);

reportWebVitals();
