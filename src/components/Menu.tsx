import { ReactNode, useEffect } from "react";
import { MyLink, MyNav } from "../style/Menu.style";
import { gCodeLang } from "./Header";
import * as jsonData from "./../data/lang.json";
import { myNavBar, MyLang, Lang, getLang, defaultLang } from "./constant";

const content = {
  fr: {
    home: "[fr] home",
    country: "[fr] country",
    service: "[fr] service",
    package: "[fr] package",
    about: "[fr] about",
  },
  en: {
    home: "[en] home",
    country: "[en] country",
    service: "[en] service",
    package: "[en] package",
    about: "[en] about",
  },
  pr: {
    home: "[pr] home",
    country: "[pr] country",
    service: "[pr] service",
    package: "[pr] package",
    about: "[pr] about",
  },
};

type menuProps = {
  lang: Lang;
  
};

export default function Menu({lang} : menuProps) {

  lang= lang==undefined ? defaultLang : lang;
  let myContent = content[lang];

  return (
    <>
      <MyNav>
        <MyLink to="/">{myContent.home}</MyLink>
        <MyLink to="/country">{myContent.about}</MyLink>
        <MyLink to="/service">{myContent.service} </MyLink>
        <MyLink to="/package">{myContent.package}</MyLink>
        <MyLink to="/contact">{myContent.about}</MyLink>
      </MyNav>
    </>
  );
}
