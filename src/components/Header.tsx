import { useEffect, useState } from "react";
import {
  BurgerMenu,
  BurgerNav,
  HeaderContainer,
  Img,
  Logo,
  MenuNav,
} from "../style/Header.style";

import { defaultLang, getLang, Lang, setLang } from "./constant";
import Menu from "./Menu";

/**
 * this component is in charge to display the header
 * header is : logo, nav-bar,lang-bar,burger-menu
 *
 */
import fr from "./../image/fr.png";
import pr from "./../image/pr.png";
import en from "./../image/en.png";

export let stateLang: Lang = defaultLang;

export function DisplayLogo(props: any) {
  return (
    <Logo>
      <p>{`Existentia ${props.lang}`}</p>
    </Logo>
  );
}

export function FlagLang(props: any) {
  const src: string = `./mozam/src/image/${props.lang}.png`;
  const alt: string = `${props.lang}`;
  return (
    <>
      <Img
        onClick={(e) => {
          props.onClick(e);
        }}
        className={props.className}
        src={src}
        id={props.lang}
        alt={alt}
      />
    </>
  );
}

export default function Header(props: any) {
  const [displayState, setDisplayState] = useState<boolean>(true);
  const currentLang = getLang();

  return (
    <>
      <HeaderContainer>
        <DisplayLogo lang={currentLang} />
        <MenuNav className={"hide"}>
          <Menu lang={currentLang} />
        </MenuNav>
        <FlagLang
          lang={"fr"}
          onClick={props.onClick}
          className={`${getLang() === "fr" ? "hide" : null}`}
        />
        <FlagLang
          lang={"pr"}
          onClick={props.onClick}
          className={`${getLang() === "pr" ? "hide" : null}`}
        />
        <FlagLang
          lang={"en"}
          onClick={props.onClick}
          className={`${getLang() === "en" ? "hide" : null}`}
        />
        <BurgerNav className={`${displayState ? "hide" : null}`}>
          <Menu lang={currentLang} />
        </BurgerNav>
        <BurgerMenu
          onClick={(e) => {
            setDisplayState(!displayState);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </BurgerMenu>
      </HeaderContainer>
    </>
  );
}
