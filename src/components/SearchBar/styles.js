import styled from "styled-components";

export const Form = styled.form`
  input, button{
    padding: 10px 20px;
    outline: none;
    border: none;
    background-color: var(--color-card);
    color: var(--color-text);
    font-family: var(--font-nunito);
    font-weight: 300;
  }

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
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
      background-color: var(--color-text-dark);
    }
  }
`