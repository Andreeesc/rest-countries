import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html{
    --color-background: hsl(207, 26%, 17%);
    --color-card: hsl(209, 23%, 22%);    
    --color-text-dark: hsl(0, 0%, 52%);
    --color-text: hsl(0, 0%, 100%);
    --font-nunito: 'Nunito Sans', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
  }

  input, button{
    padding: 10px 20px;
    outline: none;
    border: none;
    background-color: var(--color-card);
    color: var(--color-text);
    font-family: var(--font-nunito);
    font-weight: 300;
  }
  button{
    cursor: pointer;
    text-align: center;
    transition: all .5s ease;
    &:hover{
      background-color: var(--color-text-dark);
    }
    &.show-more{
      display: block;
      margin: 0 auto;
    }
  }
`;

export const ContainerApp = styled.div`
  background-color: var(--color-background);
`;

export const ContainerGrid = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 767px) {
    padding: 20px;
    grid-template-columns: 1fr;
  }
`;

export const FilterCountry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  margin: 0 auto;
  max-width: 1080px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
