import styled from "styled-components";
import { AppTheme } from "./App.style";

export const ServiceContainer = styled.div`
  background-color: ${AppTheme.colors.lessDark};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  border-radius: 0.6rem;
  padding: 0.6rem;
  min-width: 100vw;
`;

export const Service = styled.div`
  background-color: ${AppTheme.colors.lessDark};
  border-radius: 0.6rem;
  padding: 0.6rem;
`;

export const OneService = styled.div`
  background-color: ${AppTheme.colors.dark};
  border-radius: 0.6rem;
  padding: 0.6rem;
  color: ${AppTheme.colors.medium};
  margin: 0.2rem;
  img{
    width: 200px;
    height: 100px;
  }
`;
