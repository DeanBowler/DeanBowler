import React from 'react';
import styled, { Box } from '@xstyled/styled-components';
import Link from 'next/link';
import { PostProps } from '../lib/posts';
import Spaced from '../styled/Spaced';
import { Tag } from './Tag';

interface PostPreviewProps extends PostProps {
  className?: string;
}

const StyledLink = styled.aBox`
  text-decoration: none;
  color: text;

  &:visited {
    color: text;
  }
`;

export function PostPreview({
  title,
  summary,
  tags,
  slug,
  readingTime,
  className,
}: PostPreviewProps) {
  return (
    <Box className={className}>
      <Spaced my={2}>
        <Link href={`/blog/${slug}`} passHref>
          <StyledLink>
            <Box as="h3" fontSize={{ xs: 'xl', sm: '2xl' }} m={0}>
              {title}
            </Box>
          </StyledLink>
        </Link>
        <Box>{summary}</Box>
        <Box opacity={0.8}>{readingTime}</Box>
        <Box display="flex" alignItems="baseline" flexWrap="wrap">
          <Spaced mr={2} mb={2}>
            {tags?.length && tags.map(t => <Tag key={t}>{t}</Tag>)}
          </Spaced>
        </Box>
      </Spaced>
    </Box>
  );
}
