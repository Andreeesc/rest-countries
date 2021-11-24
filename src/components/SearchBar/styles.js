import styled from "styled-components";

export const Form = styled.form`
  input{
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;

    &::placeholder{
      color: var(--color-text);
    }
    @media (max-width:767px){
      margin-bottom: 20px;
    }
  }

  button{
    border-left: 1px solid var(--color-text-dark);
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
`