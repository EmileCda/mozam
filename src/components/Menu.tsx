import { ReactNode } from "react";
import { MyLink, MyNav } from "../style/Menu.style";

type menuProps={
  children: ReactNode
}

export default function Menu() {
  return (
    <>
      <MyNav>
        <MyLink to="/"  >Accueil</MyLink>
        <MyLink to="/country">informations</MyLink>
        <MyLink to="/service">Services</MyLink>
        <MyLink to="/package">Packages</MyLink>
        <MyLink to="/contact">Nous contacter</MyLink>
      </MyNav>

    </>
  );
}
