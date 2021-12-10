import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html{
    --font-nunito: 'Nunito Sans', sans-serif;
    --drop-shadow: hsl(209, 23%, 22%);
  }

  *{
    margin: 0;
    padding: 0;
  }

  input, button{
    padding: 10px 20px;
    outline: none;
    border: none;
    background-color: ${ ({ theme }) => theme.colorBackground};
    color: ${ ({ theme }) => theme.colorText};
    font-family: var(--font-nunito);
    font-weight: 300;
  }
  button{
    cursor: pointer;
    text-align: center;
    transition: all .5s ease;
    &:hover{
      background-color: ${ ({ theme }) => theme.colorTextDark};
    }
    &.show-more{
      display: block;
      margin: 0 auto;
    }
  }
`;

export const ContainerApp = styled.div`
  background-color: ${ ({ theme }) => theme.colorBackground};
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
