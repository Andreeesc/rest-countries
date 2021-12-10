import styled from 'styled-components';

export const Form = styled.form`
  input {
    border-radius: 5px;
    background-color: ${ ({ theme }) => theme.colorCard};
    max-width: 100%;
    filter: drop-shadow(0 0 2px var(--drop-shadow));

    &::placeholder {
      color: ${ ({ theme }) => theme.colorText};
    }
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  button {
    border-left: 1px solid ${ ({ theme }) => theme.colorTextDark};
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
