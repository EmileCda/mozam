/**
 * styles for header including Logo,navBar, LangBar, BurgerMenu
 * 
 */
import styled from "styled-components";
import { AppTheme, BorderRadius } from "./App.style";


export const HeaderContainer = styled.header`
  background-color: ${AppTheme.colors.dark};
  min-width: 100vw;
  max-height: 5rem;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  border-radius: ${BorderRadius} ;
  `


export const Logo = styled.div`
  background-color: ${AppTheme.colors.dark};
  color: ${AppTheme.colors.light};
  font-family: ${AppTheme.font.logo};

  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100% ;
  font-size: 3rem;
  flex-grow: 2;
  
`;


export const BurgerMenu = styled.div`
  background-color: ${AppTheme.colors.medium};
  min-height: 3rem;
  min-width: 3rem;
  /* position: absolute;
  top: 0.6rem;
  right: 0.6rem; */
  border-radius: ${BorderRadius} ;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

export const MenuNav = styled.div`
  background-color: ${AppTheme.colors.medium};
  height: 3rem;
  width: 3rem;
`;


export const BurgerNav = styled.div`
  background-color: ${AppTheme.colors.medium};
  /* height: 3rem; */
  /* width: 3rem; */
  position : absolute;
  top: 5rem;
  right: 1rem;

`

export const LangNav = styled.div`
  background-color: ${AppTheme.colors.lessDark};
  min-height: 3rem;
  min-width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Img = styled.img`
  height: 2rem;
  width: 2rem;

`
