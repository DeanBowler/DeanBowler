import styled from '@xstyled/styled-components';

const SectionContainer = styled.section<{ fullHeight: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${p => (p.fullHeight ? 'calc(100vh)' : 'inherit')};
`;

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

export function Section({ children, className, fullHeight = false }: SectionProps) {
  return (
    <SectionContainer className={className} fullHeight={fullHeight}>
      {children}
    </SectionContainer>
  );
}
