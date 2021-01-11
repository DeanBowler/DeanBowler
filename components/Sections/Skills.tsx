import { x } from '@xstyled/styled-components';
import { Section } from '@/components/Section';

export function Skills() {
  return (
    <Section>
      <x.div m={{ xs: 2, md: 4 }}>
        <x.h2
          id="skills"
          textAlign="center"
          fontWeight="light"
          fontSize={{ sm: '4xl', lg: '6xl' }}
          color="primary"
        >
          Skills
        </x.h2>
        <x.h3 fontWeight="normal">Things I love to use</x.h3>
      </x.div>
    </Section>
  );
}
