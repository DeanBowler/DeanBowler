import React from 'react';
import { x } from '@xstyled/styled-components';

import Spaced from '@/styled/Spaced';

import { RangeSlider } from '@/components/RangeSlider';
import { Toggle } from '@/components/Toggle';
import { LayoutSettings } from './types';

export interface LayoutSettingsPanelProps {
  className?: string;
  settings: LayoutSettings;
  onSettingsChange(newSettings: Partial<LayoutSettings>): void;
}

export function LayoutSettingsPanel({
  className,
  settings,
  onSettingsChange,
}: LayoutSettingsPanelProps) {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      className={className}
    >
      <x.h3 letterSpacing={2} fontWeight="normal">
        Layout
      </x.h3>
      <Spaced my={2}>
        <RangeSlider
          label="Horizontal Offset"
          min={-128}
          max={128}
          value={settings.offsetX}
          onValueChange={offsetX => onSettingsChange({ offsetX })}
        />
        <RangeSlider
          label="Vertical Offset"
          min={-128}
          max={128}
          value={settings.offsetY}
          onValueChange={offsetY => onSettingsChange({ offsetY })}
        />
        <RangeSlider
          label="Scale"
          min={0.5}
          max={2}
          step={0.05}
          value={settings.scale}
          onValueChange={scale => onSettingsChange({ scale })}
        />
        <Toggle
          label="Flip Horizontal"
          value={settings.flipHorizontal}
          onClick={() =>
            onSettingsChange({
              flipHorizontal: !settings.flipHorizontal,
            })
          }
        />
        <Toggle
          label="Flip Vertical"
          value={settings.flipVertical}
          onClick={() =>
            onSettingsChange({
              flipVertical: !settings.flipVertical,
            })
          }
        />
      </Spaced>
    </x.div>
  );
}
