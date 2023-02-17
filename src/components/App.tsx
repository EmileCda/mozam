import { StrictMode, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppGlobalStyle } from "../style/App.style";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import Accueil from "./Accueil";
import Contact from "./Contact";
import About from "./About";
import Country from "./Country";
import Service from "./Service";
import Package from "./Package";
import Menu from "./Menu";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/country" element={<Country />} />
          <Route path="/service" element={<Service />} />
          <Route path="/package" element={<Package />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </StrictMode>
  );
}
