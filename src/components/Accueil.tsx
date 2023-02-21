import { CarouselContainer, CarouselImg, MainContainer, MyContainer } from "../style/Accueil.style";
import { getLang, Lang } from "./constant";
import jsonData from "./../data/lang.json";
import Package from "./Package";
import Service from "./Service";
import { useEffect, useState } from "react";

export const myDataLang: any = jsonData;
const photoCarousel = myDataLang["carousel"];
const currentLang: Lang = "fr";
const interval: number = myDataLang["carouselInterval"];

export default function Accueil(props: any) {
  const [id, setId] = useState<number>(0);
  let counter: number = 0;


  useEffect(() => {
    let timer = setInterval(() => {
      counter += 1;

      if (counter >= photoCarousel.length) {
        counter = 0;
      }
      setId((id) => counter);
    }, interval);

    // clean up
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  // }, [started]);

  return (
    <>
      <CarouselContainer>
        <img className={CarouselImg}
          src={photoCarousel[id]["url"]}
          alt={photoCarousel[id][currentLang]}
        ></img>
      </CarouselContainer>
      <Service  lang={props.lang} />
    </>
  );
}
