import styled from '@xstyled/styled-components';

export const Button = styled.button`
  padding: 3 4;
  border-radius: 10;
  background-color: transparent;
  border: 2px solid;
  border-color: primary;
  color: primary;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 2;

  :hover {
    background-color: primary-glass;
  }
`;
