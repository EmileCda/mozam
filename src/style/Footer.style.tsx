/**
 * styles for header including Logo,navBar, LangBar, BurgerMenu
 * 
 */
import styled from "styled-components";
import { AppTheme } from "./App.style";


export const FooterContainer = styled.footer`
  background-color: ${AppTheme.colors.dark};
  min-height: 10rem;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  border: 1px dashed  red;
`;
