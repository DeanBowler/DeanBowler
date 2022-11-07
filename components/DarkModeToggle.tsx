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
      opacity={{ _: 0.6, hover: 1 }}
      color="white"
      fontSize="2xl"
      outline="none"
      cursor="pointer"
      role="checkbox"
      aria-label="toggle dark mode"
      aria-checked={colorMode === 'dark'}
    >
      {colorMode === 'dark' ? <FiMoon /> : <FiSun />}
    </x.button>
  );
}
