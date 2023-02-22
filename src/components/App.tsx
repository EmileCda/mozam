import { StrictMode, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { AppGlobalStyle } from "../style/App.style";
import Footer from "./Footer";
import About from "./About";
import Country from "./Country";
import Service from "./Service";
import Package from "./Package";
import Accueil from "./Accueil";
import Tictac from "./Tictac";

import jsonData from "./../data/lang.json";
import Header from "./Header";
export const myDataLang: any = jsonData;
/**
 * Principal design for the App.
 * including a Header, a main and a footer
 *
 * @returns
 *
 */

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />

        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/country" element={<Country />} />
          <Route path="/service" element={<Service />} />
          <Route path="/package" element={<Package />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Tictac />
    </StrictMode>
  );
}
