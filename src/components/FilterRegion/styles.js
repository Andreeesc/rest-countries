import styled from 'styled-components';

export const SelectStyle = styled.select`
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: ${ ({ theme }) => theme.colorCard};
  color: ${ ({ theme }) => theme.colorText};
  font-family: var(--font-nunito);
  font-weight: 300;
  filter: drop-shadow(0 0 2px var(--drop-shadow));
`;
