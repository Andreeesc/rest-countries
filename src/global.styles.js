import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

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
`

export const ContainerApp = styled.div`
  background-color: var(--color-background);
`

export const ContainerGrid = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width:767px){
    padding: 20px;
    grid-template-columns: 1fr;
  }
`

export const FilterCountry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  margin: 0 auto;
  max-width: 1080px;

  @media(max-width:767px){
    flex-direction: column;
  }
`