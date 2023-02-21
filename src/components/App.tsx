import { StrictMode, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { AppGlobalStyle } from "../style/App.style";
import jsonData from "./../data/lang.json";
import Footer from "./Footer";
import About from "./About";
import Country from "./Country";
import Service from "./Service";
import Package from "./Package";
import Header from "./Header";
import { defaultLang, Lang, setLang } from "./constant";
import Accueil from "./Accueil";
import Tictac from "./Tictac";

export const myDataLang: any = jsonData;
/**
 * Principal design for the App.
 * including a Header, a main and a footer
 *
 * @returns
 *
 */

export default function App() {
  const [langState, setLangState] = useState<Lang>(defaultLang);

  // setLangState(defaultLang);
  function handleOnClick(props: any) {
    setLangState(props.target.id);
    setLang(props.target.id);
  }
  return (
    <StrictMode>
       <BrowserRouter>
         <AppGlobalStyle />

        <Header onClick={(event: any) => handleOnClick(event)} lang={langState} />
         <Routes>
           <Route path="/mozam"  element={<Accueil lang={langState} />} />
           {/* <Route path="/country" element={<Country />} /> */}
           <Route path="/service" element={<Service lang={langState} />} />
           {/* <Route path="/package" element={<Package />} /> */}
           <Route path="/About" element={<About lang={langState} />} />
         </Routes>
       </BrowserRouter>
       <Footer />
    {/* <Tictac /> */}
     </StrictMode>

  );
}
