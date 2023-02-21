import { useEffect, useState } from "react";
import jsonData from "./../data/lang.json";
import { Lang } from "./constant";
export const myDataLang: any = jsonData;
const photoCarousel = myDataLang["carousel"];
const currentLang:Lang = "fr";
const interval: number = 3000;
export default function Tictac() {
  const [id, setId] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);
  let counter: number = 0;

  function toggleTimer() {
    setStarted(!started);
  }

  useEffect(() => {
    //    case isStarted === false
    if (!started) {
      return;
    }

    // case isStarted === true

    let timer = setInterval(() => {
      counter += 1;

      if (counter>= photoCarousel.length) {
        counter=0;
      }
      setId((id) => counter);
    }, interval);

    // clean up
    return () => {
      window.clearInterval(timer);
    };
  }, [started]);

  return (
    <>
      <p onClick={toggleTimer}> {`Tictac : ${id} : ${photoCarousel.length}`}</p>
      <img
          src={photoCarousel[id]["url"]}
          alt={photoCarousel[id][currentLang]}
        ></img>
    </>
  );
}
