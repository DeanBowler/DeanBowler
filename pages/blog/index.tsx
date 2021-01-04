import React from 'react';

import { Box, x } from '@xstyled/styled-components';
import { HeadingSection } from '../../components/HeadingSection';
import { Layout } from '../../components/Layout';
import { getAllPosts, PostProps } from '../../lib/posts';
import { PostPreview } from '../../components/PostPreview';
import Spaced from '../../styled/Spaced';

interface BlogIndexProps {
  allPosts: readonly PostProps[];
}

export default function BlogIndex({ allPosts }: BlogIndexProps) {
  return (
    <Layout title="Blog | Dean Bowler">
      <HeadingSection>
        <Box row justifyContent={{ sm: 'center' }} my={4} mx={4}>
          <Box col={{ sm: 3 / 4, md: 2 / 3 }}>
            <x.h1 fontWeight="lighter" fontSize={{ xs: '5xl', sm: '6xl' }}>
              Blog
            </x.h1>
          </Box>
        </Box>
      </HeadingSection>
      <Box row justifyContent={{ sm: 'center' }} my={4} mx={4}>
        <Box col={{ sm: 3 / 4, md: 2 / 3 }}>
          <Box as="h2" fontWeight="normal" fontSize={{ xs: '3xl', sm: '4xl' }}>
            Posts
          </Box>
          <Spaced my={4}>
            {allPosts?.map(p => (
              <PostPreview key={p.slug} {...p} />
            ))}
          </Spaced>
        </Box>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
}
