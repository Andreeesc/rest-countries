import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background-color: var(--color-card);
  
  figure{
    margin: 0;
    height: 160px;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img{
      max-width: 100%;
    }
  }

  .card-info{
    padding: 20px;
    h2, p{
      font-family: var(--font-nunito);
      color: var(--color-text);
    }

    h2{
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 20px;
    }
    p{
      font-weight: 300;
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
      strong{
        font-weight: 600;
        font-size: 1em;
      }
    }
  }
`