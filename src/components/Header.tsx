import { StrictMode, useState } from "react";
import {
  BurgerMenu,
  BurgerNav,
  HeaderContainer,
  Img,
  LangNav,
  Logo,
  MenuNav,
} from "../style/Header.style";
import { MyLang, myNavBar } from "./constant";
import Menu from "./Menu";

/**
 * this component is in charge to display the header
 * header is : logo, nav-bar,lang-bar,burger-menu
 *
 */
import fr from "./../image/fr.png";
import pr from "./../image/pr.png";
import en from "./../image/en.png";

export function DisplayLogo() {
  return (
    <Logo>
      <p>Existentia</p>
    </Logo>
  );
}

export function DisplayLangs() {
  const langList = [fr, pr, en];
  return (
    <>
      {langList.map((lang, index) => (
        <Img key={index} src={lang} alt="{lang}" />
      ))}
    </>
  );
}

export default function Header() {
  const [isHide, setDisplayState] = useState<boolean>(true);

  function ToggleDisplayMode() {
    console.log("ToggleDisplayMode");
    console.log(isHide);

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
          <DisplayLangs />
        </LangNav>

        <BurgerNav className={isHide ? "hide" : null}>
          {/*  */}
          <Menu />
        </BurgerNav>
        <BurgerMenu onClick={ToggleDisplayMode}>
          <i className="fa-solid fa-bars"></i>
        </BurgerMenu>
      </HeaderContainer>
    </>
  );
}
