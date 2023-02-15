import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

/**
 * all component are centered
 *
 */

export const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

/**
 * color theme from coolor.co
 * for the whole application
 */
export const AppTheme = {
  colors: {
    dark: "#202020",
    lessDark: "#333533",
    medium: "#ffd100",
    lessLight: "#ffee32",
    light: "#d6d6d6",
  },
};

/**
 * contain style used globaly
 *
 */

export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color: ${AppTheme.colors.dark}
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
    font-size: 18px;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Header = styled.header`
  background-color: ${AppTheme.colors.dark};
  min-height: 10rem;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
`;
export const Main = styled.main`
  background-color: ${AppTheme.colors.medium};
  flex-grow: 2;
`;
export const Footer = styled.footer`
  background-color: ${AppTheme.colors.light};
  min-height: 10rem;
  flex-grow: 1;
`;

export const Logo = styled.div`
  width: 20rem;
  border-radius: 100%;
  background-color: ${AppTheme.colors.light};
  color: ${AppTheme.colors.dark};
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuBurger = styled.div`
  min-height: 100px;
  border-radius: 100%;
  background-color: ${AppTheme.colors.lessLight};
`;
