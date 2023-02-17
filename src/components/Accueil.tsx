import { MyContainer } from "../style/Accueil.style";
import Package from "./Package";
import Service from "./Service";

export default function Accueil() {
  return (
    <>
      <MyContainer>
        <p>Accueil.tsx</p>;
        <Service />
        <Package />
      </MyContainer>
    </>
  );
}
