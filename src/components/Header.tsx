import { StrictMode, useEffect, useState } from "react";
import {
  BurgerMenu,
  BurgerNav,
  HeaderContainer,
  Img,
  LangNav,
  Logo,
  MenuNav,
} from "../style/Header.style";

import { defaultLang, getLang, MyLang, myNavBar, setLang } from "./constant";
import Menu from "./Menu";
import jsonData from "./../data/lang.json";

/**
 * this component is in charge to display the header
 * header is : logo, nav-bar,lang-bar,burger-menu
 *
 */

import fr from "./../image/fr.png";
import pr from "./../image/pr.png";
import en from "./../image/en.png";

type Lang = "fr" | "pr" | "en";
export let gCodeLang: Lang;

export function DisplayLogo() {
  return (
    <Logo>
      <p>Existentia</p>
    </Logo>
  );
}


export default function Header() {
  const [isHide, setDisplayState] = useState<boolean>(true);
  const [codeLang, setCodeLang] = useState<Lang>(defaultLang);

  function FRChosen() {
    setCodeLang("fr");
    setLang("fr");
  }
  function ENChosen() {
    setCodeLang("en");
    setLang("en");
  }
  function PRChosen() {
    setCodeLang("pr");
    setLang("pr");
  }



  function ToggleDisplayMode() {
    setDisplayState(!isHide);
  }

  return (
    <>
      <HeaderContainer>
        <DisplayLogo />
        <MenuNav className={"hide"}>
          <Menu />
        </MenuNav>
        <LangNav>
        <Img
        onClick={FRChosen}
        className={codeLang === "fr" ? "hide" : null}
        src={fr}
        alt="langue française"
      />
      <Img
        onClick={PRChosen}
        className={codeLang === "pr" ? "hide" : null}
        src={pr}
        alt="íngua portuguesa"
      />
      <Img
        onClick={ENChosen}
        className={codeLang === "en" ? "hide" : null}
        src={en}
        alt="English speaking"
      />
        </LangNav>

        <BurgerNav className={isHide ? "hide" : null}>
          {/*  */}
          <Menu lang={codeLang}/>
        </BurgerNav>
        <BurgerMenu onClick={ToggleDisplayMode}>
          <i className="fa-solid fa-bars"></i>
        </BurgerMenu>
      </HeaderContainer>
    </>
  );
}
