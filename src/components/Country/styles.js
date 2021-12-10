import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  background-color: ${ ({ theme }) => theme.colorCard};
  filter: drop-shadow(0 0 2px var(--drop-shadow));

  figure {
    margin: 0;
    height: 160px;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img {
      max-width: 100%;
    }
  }

  .card-info {
    padding: 20px;
    h2,
    p {
      font-family: var(--font-nunito);
      color: ${ ({ theme }) => theme.colorText};
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 20px;
    }
    p {
      font-weight: 300;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      strong {
        font-weight: 600;
        font-size: 1em;
      }
    }
  }
`;
