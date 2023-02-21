import { OneService, ServiceContainer } from "../style/service.style";
import jsonData from "./../data/lang.json";
import { defaultLang, Lang } from "./constant";
export const myDataLang: any = jsonData;
const listLang = myDataLang["lang"];
const services = myDataLang["services"];
const content: Record<string, any> = {};
type tService = {
  title: string;
  description: string;
  picture: string;
};

export function MyService(props: any) {
  return (
    <>
      <ServiceContainer>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.picture} alt={props.title} />
      </ServiceContainer>
    </>
  );
}

export default function Service(props: any) {
  const lang: Lang = props.lang === undefined ? defaultLang : props.lang;

  for (const key of listLang) {
    let serviceList: tService[] = [];
    for (const value of services) {
      const oneService: tService = {
        title: value[key][0],
        description: value[key][1],
        picture: value[key][2],
      };
      serviceList.push(oneService);
    }
    content[key] = serviceList;
  }
  const myContent = content[lang];
  console.log(lang);
  console.log(content);

  console.log(myContent);

  const root : string = "/src/image/";
  return (
    <>
      <ServiceContainer>
        <p>Service.tsx</p>
        <div>
          {myContent.map((value: tService, index: number) => (
            <OneService key={index}>
              <h1>{value.title}</h1>
              <p>{value.description}</p>
              <img src={`${root}${value.picture}`}  alt={value.title} />
            </OneService>
          ))}
          ;
        </div>
      </ServiceContainer>
    </>
  );
}
