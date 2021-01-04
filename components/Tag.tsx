import styled from '@xstyled/styled-components';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const TagContainer = styled.box`
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  padding: 2 3;
  color: white;
`;

export function Tag({ children, className }: TagProps) {
  return <TagContainer className={className}>{children}</TagContainer>;
}
