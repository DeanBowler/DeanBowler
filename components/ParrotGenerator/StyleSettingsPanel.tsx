import React from 'react';
import { x } from '@xstyled/styled-components';

import Spaced from '@/styled/Spaced';

import { RangeSlider } from '@/components/RangeSlider';
import { Toggle } from '@/components/Toggle';
import { RadioButtonGroup, RadioChoice } from '@/components/RadioButtonGroup';
import { StyleSettings } from './types';

export interface StyleSettingsPanelProps {
  className?: string;
  settings: StyleSettings;
  onSettingsChange(newSettings: Partial<StyleSettings>): void;
}

const outlineStyleChoices: readonly RadioChoice<StyleSettings['outlineStyle']>[] = [
  { value: 'inside' },
  { value: 'outside' },
];

export function StyleSettingsPanel({
  className,
  settings,
  onSettingsChange,
}: StyleSettingsPanelProps) {
  return (
    <x.div
      row
      flexDirection="column"
      alignItems="flex-start"
      className={className}
      letterSpacing={2}
    >
      <x.h3 letterSpacing={2} fontWeight="normal">
        Style
      </x.h3>
      <Spaced my={2}>
        <Toggle
          label="Color"
          value={settings.matchHue}
          onClick={() =>
            onSettingsChange({
              matchHue: !settings.matchHue,
            })
          }
        />
        <RangeSlider
          label="Lightness"
          min={0.5}
          max={1.5}
          step={0.05}
          value={settings.lighten}
          onValueChange={lighten => onSettingsChange({ lighten })}
        />
        <RadioButtonGroup
          label="Outline"
          selected={settings.outlineStyle}
          onChange={outlineStyle => onSettingsChange({ outlineStyle })}
          choices={outlineStyleChoices}
        />
      </Spaced>
    </x.div>
  );
}
