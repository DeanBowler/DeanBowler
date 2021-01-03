import React from 'react';

import { Box } from '@xstyled/styled-components';
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
    <Layout>
      <HeadingSection>
        <Box row justifyContent={{ sm: 'center' }} my={4} mx={4}>
          <Box col={{ sm: 3 / 4, md: 2 / 3 }}>
            <Box as="h1" fontWeight="lighter" fontSize={{ xs: 6, sm: 8 }}>
              Blog
            </Box>
          </Box>
        </Box>
      </HeadingSection>
      <Box row justifyContent={{ sm: 'center' }} my={4} mx={4}>
        <Box col={{ sm: 3 / 4, md: 2 / 3 }}>
          <Box as="h2" fontWeight="normal" fontSize={{ xs: 5, sm: 6 }}>
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
