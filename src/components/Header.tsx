/**
 * this component is in charge to display the header
 * header is : logo, nav-bar,lang-bar,burger-menu
 *
 */
import { useStore } from "@nanostores/react";
import { headerStore, setbur, setStoreLang, toggleStoreBurgerMenuState } from "../store/Header.store";
import { AppGlobalStyle } from "../style/App.style";
import { BurgerMenu, BurgerNav, HeaderContainer, Img, Logo, MenuNav } from "../style/Header.style";
import Menu from "./Menu";

import fr from "./../image/fr.png";
import pr from "./../image/pr.png";
import en from "./../image/en.png";
import { Lang } from "./constant";
import { StrictMode } from "react";



export function DisplayLogo() {
const { lang, burgerMenuOn, martin } = useStore(headerStore);
return (
    <Logo onClick={() =>setbur("mom")}>
      {/* <p>DisplayLogo</p> */}
      {/* <p>{`Existentia `}</p> */}
      <p>{`Existentia ${lang}  ${martin}`}</p>
    </Logo>
  );
}


type flagLangProps = {
  className: string;
  lang: Lang;
  onClick: (lang: Lang) => void;
};

export function FlagLang({ className, lang }: flagLangProps) {
  // setStoreLang(lang);
  const alternate: string = "toto";
  let src: string = pr;
  switch (lang) {
    case "fr":
      src = fr;
      break;
    case "pr":
      src = pr;
      break;
    case "en":
      src = en;
      break;
    default:
      src = pr;
      break;
  }

  return (
    <>
      <Img className={className} src={src} id={lang} alt={alternate} onClick={()=>setStoreLang(lang)}/>
    </>
  );
}


export default function Header() {
  const { lang,burgerMenuOn } = useStore(headerStore);

  return (
    <>
        <StrictMode>

      <HeaderContainer>
        <AppGlobalStyle />
        <DisplayLogo />
        <MenuNav className={`hide`}>
          <Menu />
        </MenuNav>
        <FlagLang
          lang={"fr"}
          onClick={(lang) => setStoreLang(lang)}
          className={`${lang === "fr" ? "hide" : null}`}
        />
        <FlagLang
          lang={"pr"}
          onClick={() => setStoreLang("pr")}
          className={`${lang === "pr" ? "hide" : null}`}
        />
        <FlagLang
          lang={"en"}
          onClick={() => setStoreLang("en")}
          className={`${lang === "en" ? "hide" : null}`}
        />
        <BurgerNav className={`${burgerMenuOn ?  null :"hide"}`}>
          <Menu />
        </BurgerNav>
        <BurgerMenu onClick={() => toggleStoreBurgerMenuState(!burgerMenuOn) }>
        {/* <BurgerMenu onClick={() => setStoreLang("en") }> */}
          <i className="fa-solid fa-bars" ></i>
        </BurgerMenu>

      </HeaderContainer>
      </StrictMode>
    </>
  );
}
