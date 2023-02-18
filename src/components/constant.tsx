type Picture = {
  src: string;
  alt: string;
};


export const carouselImg :Picture[]=[

  {src:"./src/image/Vilankulous1.jpg",alt: "image de Vilankulous.jpg"},
  {src:"./src/image/Vilankulous2.jpg",alt: "image de Vilankulous.jpg"},
  {src:"./src/image/Vilankulous3.jpg",alt: "image de Vilankulous.jpg"},



]

type JsonNavBar = {
  name: string;
  link: string;
  quantity: number;
};

export const myNavBar: JsonNavBar = {
  name: "navBar",
  link: "navBar-link",
  quantity: 5,
};

export type Lang = "fr" | "en" | "pr";
export const MyLang: Lang[] = ["fr", "en", "pr"];
export const defaultLang : Lang = "pr";
let currentLang: Lang = defaultLang
export function getLang(){
  return currentLang ;
}
export function setLang(lang:Lang){
  currentLang = lang ;
  return currentLang ;
}


type PackType = "Serenity" | "Elite" | "Experience";

export const myPack: PackType[] = ["Serenity", "Elite", "Experience"];

type JsonPackage = {
  name: string;
  description: string;
  Price: string;
  asset: string;
  quantity: number;
};

export const myJsonPackage: JsonPackage = {
  name: "pack",
  description: "packDesc",
  Price: "packPrice",
  asset: "packAsset",
  quantity: 3,
};

type Service =
  | "Home services"
  | "Familly"
  | "Mobility"
  | "Car"
  | "In the country"
  | "leisures";

export const myService: Service[] = [
  "Home services",
  "Familly",
  "Mobility",
  "Car",
  "In the country",
  "leisures",
];
