import styled, { x, th } from '@xstyled/styled-components';

import Spaced from '@/styled/Spaced';

export interface RadioChoice<TChoiceType extends string | number | undefined> {
  label?: string;
  value: TChoiceType;
}

export interface RadioButtonChoiceProps<TChoiceType extends string | number | undefined> {
  label?: string;
  choices: readonly RadioChoice<TChoiceType>[];
  selected: TChoiceType | undefined;
  onChange(selected: TChoiceType | undefined): void;
}

export const RadioButton = styled.button`
  padding: 2 3;
  border-radius: 10;

  background-color: text-a30;
  font-family: ${th.font('normal')}, 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: sm;
  border: none;
  color: white;
  cursor: pointer;
  text-decoration: none;

  &[aria-checked='true'] {
    background-color: primary;
  }

  :hover {
    background-color: primary-a50;
  }

  :focus {
    box-shadow: 0 0 0 4px ${th.color('primary-a50')};
    outline: none;
  }
`;

export function RadioButtonGroup<TChoiceType extends string | number | undefined>({
  label,
  choices,
  selected,
  onChange,
}: RadioButtonChoiceProps<TChoiceType>) {
  return (
    <x.div role="radiogroup" my={2}>
      <x.label>{label}</x.label>
      <x.div display="flex" backgroundColor="text-a30" borderRadius={12} p={1} mt={1}>
        <Spaced mr={1} includeLast={false}>
          {choices.map(({ label, value }) => (
            <RadioButton
              role="radio"
              key={value}
              aria-checked={selected === value}
              onClick={() => (selected === value ? onChange(undefined) : onChange(value))}
            >
              {label ?? value}
            </RadioButton>
          ))}
        </Spaced>
      </x.div>
    </x.div>
  );
}
