import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 0;
  background-color: var(--color-card);
  @media (max-width: 767px) {
    text-align: center;
  }

  div {
    max-width: 1080px;
    margin: 0 auto;
    h1 {
      font-size: 2rem;
      font-family: var(--font-nunito);
      color: var(--color-text);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
