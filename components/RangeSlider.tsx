import React from 'react';
import { x, th } from '@xstyled/styled-components';
import styled from 'styled-components';

export interface RangeSliderProps {
  value: number;
  onValueChange(value: number): void;
  label: string;
  min: number;
  max: number;
  step?: number;
  className?: string;
}

const StyledRange = styled.input`
  -webkit-appearance: none;
  background: ${th.color('text-a30')};
  height: 10px;
  border-radius: 5px;
  outline: none;
  padding: 0;
  margin: 0.5em 0;

  &:focus {
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 5px ${th.color('primary-a30')};
    }
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${th.color('primary')};
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }

  /* &::-webkit-slider-runnable-track {
    background: red;
  } */
`;

export function RangeSlider({
  value,
  onValueChange,
  label,
  min,
  max,
  step = 1,
  className,
}: RangeSliderProps) {
  return (
    <x.div row flexDirection="column" className={className}>
      <x.label>{label}</x.label>
      <x.div row>
        <StyledRange
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={({ target: { valueAsNumber } }) => onValueChange(valueAsNumber)}
        />
        <x.div w={2} textAlign="center">
          {value}
        </x.div>
      </x.div>
    </x.div>
  );
}
