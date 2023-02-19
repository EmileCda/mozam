import { MyContainer } from "../style/Accueil.style";
import { getLang } from "./constant";
import Package from "./Package";
import Service from "./Service";

export default function Accueil(props: any) {
  const currentLang = props.lang==="" ? getLang() : props.lang
  console.log(`[${props.lang}]`)
  console.log(currentLang)
  console.log(getLang())
  return (
    <>
    
    <p>{`Accueil [${props.lang}]`}</p>
      {/* <MyContainer>
        
        <Service />
        <Package />
      </MyContainer> */}
    </>
  );
}


