import React from 'react';
import styled, { x } from '@xstyled/styled-components';
import Link from 'next/link';
import { PostProps } from '@/lib/posts';
import Spaced from '@/styled/Spaced';
import { Tag } from './Tag';

interface PostPreviewProps extends PostProps {
  className?: string;
}

const StyledLink = styled(Link)`
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
    <x.div className={className}>
      <Spaced my={2}>
        <StyledLink href={`/blog/${slug}`} passHref>
          <x.h3 fontWeight="normal" fontSize={{ xs: 'xl', sm: '2xl' }} m={0}>
            {title}
          </x.h3>
        </StyledLink>
        <x.div>{summary}</x.div>
        <x.div opacity={0.8}>{readingTime}</x.div>
        <x.div display="flex" alignItems="baseline" flexWrap="wrap">
          <Spaced mr={2} mb={2}>
            {tags?.length && tags.map(t => <Tag key={t}>{t}</Tag>)}
          </Spaced>
        </x.div>
      </Spaced>
    </x.div>
  );
}
