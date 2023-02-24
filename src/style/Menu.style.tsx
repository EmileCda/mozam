import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppTheme } from "./App.style";



export const MyNav = styled.nav`
  background-color : ${AppTheme.colors.medium};
 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  border-radius: 0.6rem;
  padding: 0.6rem;
  /* translate: 0px 0px; */
  /* transition: all 1s ease-in-out; */
  position: absolute;
  top : 0px;
  right: 0px;
  z-index: 0;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
`

