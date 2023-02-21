/**
 * styles for header including Logo,navBar, LangBar, BurgerMenu
 * 
 */
import styled from "styled-components";
import { AppTheme } from "./App.style";


export const MyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.main`
  background-color: ${AppTheme.colors.lessLight};
  min-height: 15rem;
  flex-grow: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-duration: 1500ms;
  img {
    width : 400px;
    height: 400px;

  }
`;

export const CarouselContainer = styled.div`
  background-color: ${AppTheme.colors.lessLight};
  img {
    height: 400px;
    min-width: 100vw;
  }
  /* transition-property: all;
  transition-duration: 1000ms; */
`;

export const CarouselImg = styled.img`
    background-color: aliceblue;
`;

