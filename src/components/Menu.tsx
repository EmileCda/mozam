import { MyLink, MyNav } from "../style/Menu.style";
import { Lang,  defaultLang } from "./constant";
import jsonData from "./../data/lang.json";
const myDataLang: any = jsonData;


const content: Record<string, any> = {};
const listLang = myDataLang["lang"];
for (const index in listLang) {
  const key = listLang[index];
  content[key] = {
    home: myDataLang["navBar0"][index] as string,
    country: myDataLang["navBar1"][index] as string,
    service: myDataLang["navBar2"][index] as string,
    package: myDataLang["navBar3"][index] as string,
    about: myDataLang["navBar4"][index] as string,
    linkHome: myDataLang["navBar-link0"] as string,
    linkCountry: myDataLang["navBar-link1"] as string,
    linkService: myDataLang["navBar-link2"] as string,
    linkPackage: myDataLang["navBar-link3"] as string,
    linkAbout: myDataLang["navBar-link4"] as string,
  };
}

type menuProps = {
  lang: Lang;
};

export default function Menu({ lang }: menuProps) {
  lang = lang == undefined ? defaultLang : lang;
  let myContent = content[lang];

  return (
    <>
      <MyNav>
        <MyLink to={myContent.linkHome}>{myContent.home}</MyLink>
        <MyLink to={myContent.linkCountry}>{myContent.country}</MyLink>
        <MyLink to={myContent.linkService}>{myContent.service} </MyLink>
        <MyLink to={myContent.linkPackage}>{myContent.package}</MyLink>
        <MyLink to={myContent.linkAbout}>{myContent.about}</MyLink>
      </MyNav>
    </>
  );
}
