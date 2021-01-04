import { useColorMode, x } from '@xstyled/styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

export function DarkModeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  const handleToggle = () => setColorMode(colorMode === 'default' ? 'dark' : 'default');

  return (
    <x.button
      onClick={handleToggle}
      appearance="none"
      background="transparent"
      border="none"
      opacity={0.6}
      color="white"
      fontSize="2xl"
      focusOutline="none"
      cursor="pointer"
      hoverOpacity={1}
      transition
    >
      {colorMode === 'dark' ? <FiSun /> : <FiMoon />}
    </x.button>
  );
}
