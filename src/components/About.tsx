import background from "./../image/Vilankulous1.jpg";
import { getLang } from "./constant";
export default function About(props: any) {

  const currentLang = props.lang==="" ? getLang() : props.lang
  console.log(props.lang)
  console.log(currentLang)
  console.log(getLang())
  
  
  return (
    <>
      <p>{`About [${currentLang}]`}</p>
      <img src={background} alt="background" />
    </>
  );
}
