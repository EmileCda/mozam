import { StrictMode } from "react";
import {
  AppGlobalStyle,
  Footer,
  Header,
  Logo,
  Main,
  MenuBurger,
} from "../style/App.style";

/**
 * Principal design for the App.
 * including a Header, a main and a footer
 *
 * @returns
 *
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <Header>
        <Logo><p>Existentia</p>
          </Logo>
        <MenuBurger />
      </Header>
      <Main></Main>
      <Footer></Footer>
    </StrictMode>
  );
}
