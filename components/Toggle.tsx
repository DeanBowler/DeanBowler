import React from 'react';
import styled, { th, x } from '@xstyled/styled-components';

export interface ToggleProps {
  label: string;
  value: boolean;
  onClick?(): void;
  className?: string;
}

interface StyledToggleProps {
  toggled: boolean;
}

const StyledInput = styled.input`
  display: none;
`;

const StyledToggle = styled.span<StyledToggleProps>`
  width: 42px;
  height: 24px;
  border-radius: 14px;
  margin-right: 0.5rem;

  background: ${p => (p.toggled ? th.color('primary') : th.color('text-a30'))};

  transition: opacity 300ms ease-in-out;

  :hover {
    opacity: 0.9;
  }
`;

const StyledThumb = styled.div<StyledToggleProps>`
  position: relative;
  left: ${p => (p.toggled ? '20px' : '4px')};
  height: 18px;
  width: 18px;
  top: 3px;
  background: ${p => (p.toggled ? 'rgba(0, 0, 0, 0.4)' : th.color('text-a30'))};
  border-radius: 14px;

  transition: left 300ms cubic-bezier(0.65, 0.05, 0.36, 1), opacity 300ms ease-in-out;
`;

const ToggleContainer = styled.labelBox`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  :focus {
    outline: none;

    ${StyledToggle} {
      box-shadow: 0 0 0 5px ${th.color('primary-a30')};
    }

    ${StyledThumb} {
      opacity: 0.8;
    }
  }
`;

export function Toggle({ label, value, onClick, className }: ToggleProps) {
  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (onClick) onClick();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      if (onClick) onClick();
    }
  };

  return (
    <ToggleContainer
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      className={className}
    >
      <StyledInput type="checkbox" defaultChecked={value} />
      <StyledToggle toggled={value}>
        <StyledThumb toggled={value} />
      </StyledToggle>
      <x.div>{label}</x.div>
    </ToggleContainer>
  );
}
