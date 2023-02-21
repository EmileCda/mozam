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

font :{ regular : `Poppins', sans-serif`,
logo : `'Bilbo Swash Caps', cursive `,

}
  
    
};

export const BorderRadius = "0.6rem";

/**
 * contain style used globaly
 *
 */

export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color: ${AppTheme.colors.light}
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    font-size: 18px;
    font-family: ${AppTheme.font.regular};
  }
  * {
    box-sizing: border-box;
  }

.hide{
    display: none;
  }
`;


