import { MyLink, MyNav } from "../style/Menu.style";
import { Lang, defaultLang, getLang } from "./constant";
import jsonData from "./../data/lang.json";
const myDataLang: any = jsonData;

const content: Record<string, any> = {};
const listLang = myDataLang["lang"];

const myNavBar = myDataLang["navBar"];

type tItem = {
  label: string;
  link: string;
};

type menuProps = {
  lang: Lang;
};

export default function Menu(props: any) {
  const lang: Lang = props.lang;
  // const lang2 = getLang();
  for (const key of listLang) {
    let items: tItem[] = [];
    for (const value of myNavBar) {
      const oneItem: tItem = { label: value[key], link: value["link"] };
      items.push(oneItem);
    }
    content[key] = items;
  }

  const myContent = content[lang];
  return (
    <>
      <MyNav>
        {myContent.map((value : tItem, index : number) => (
          <MyLink key={index} to={value.link}>
            {value.label}
          </MyLink>

        ))}
      </MyNav>
    </>
  );
}
