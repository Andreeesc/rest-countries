import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 0;
  background-color: ${ ({ theme }) => theme.colorCard};
  @media (max-width: 767px) {
    text-align: center;
  }

  div {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 767px) {
      flex-direction: column;
    }

    h1 {
      font-size: 2rem;
      font-family: var(--font-nunito);
      color: ${ ({ theme }) => theme.colorText};
      &:hover {
        cursor: pointer;
      }
    }

    button{
      border-radius: 5px;
      display: flex;
      align-items: center;
      font-weight: 700;
      &:hover{
        background-color: ${ ({ theme }) => theme.colorButton};
      }

      svg{
        margin-right: 10px;
      }
    }
  }
`;
