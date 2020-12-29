import styled from 'styled-components';

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  min-height: calc(100vh);
`;

interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return <SectionContainer>{children}</SectionContainer>;
}
