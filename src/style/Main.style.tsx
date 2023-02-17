/**
 * styles for header including Logo,navBar, LangBar, BurgerMenu
 * 
 */
import styled from "styled-components";
import { AppTheme } from "./App.style";


export const MainContainer = styled.main`
  background-color: ${AppTheme.colors.lessLight};
  min-height: 15rem;
  flex-grow: 20;
  display: flex;
  justify-content: flex-start;
`;


export const CarouselContainer = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  min-height: 200rem;
  margin: 0.6rem 0rem ;

`

export const Services = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  min-height: 200rem;
  margin: 0.6rem 0rem ;

`
export const Packages = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  min-height: 200rem;
  margin: 0.6rem 0rem ;

`