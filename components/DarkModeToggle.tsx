import { useColorMode } from '@xstyled/styled-components';

export function DarkModeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  const handleToggle = () => setColorMode(colorMode === 'default' ? 'dark' : 'default');

  return <button onClick={handleToggle}>{colorMode}</button>;
}
