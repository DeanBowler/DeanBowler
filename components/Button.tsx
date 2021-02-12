import styled, { css, th } from '@xstyled/styled-components';

interface ButtonProps {
  fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 3 4;
  border-radius: 10;
  background-color: transparent;
  font-family: ${th.font('normal')}, 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: base;
  border: 2px solid;
  border-color: primary;
  color: primary;
  cursor: pointer;
  text-decoration: none;

  ${p =>
    p.fullWidth &&
    css`
      width: 100%;
    `}

  :hover {
    background-color: primary-a10;
  }

  :focus {
    box-shadow: 0 0 0 5px ${th.color('primary-a30')};
    outline: none;
  }
`;
