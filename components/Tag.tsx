import styled from '@xstyled/styled-components';

import { ABBERATION_FILTER } from './SvgFilters';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const TagContainer = styled.div`
  display: inline-block;
  font-size: base;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  padding: 2 3;
  color: white;
  user-select: none;

  :hover {
    filter: url(#${ABBERATION_FILTER});
  }
`;

export function Tag({ children, className }: TagProps) {
  return <TagContainer className={className}>{children}</TagContainer>;
}
