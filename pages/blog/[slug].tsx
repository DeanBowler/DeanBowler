import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Layout } from '../../components/Layout';
import { getAllPosts, getPostBySlug, PostProps } from '../../lib/posts';
import { Box } from '@xstyled/styled-components';
import { HeadingSection } from '../../components/HeadingSection';
import { formatRelative } from 'date-fns';
import { Tag } from '../../components/Tag';
import Spaced from '../../styled/Spaced';

interface BlogStaticProps {
  post: PostProps;
}

const renderers = {
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <Box
      as="blockquote"
      marginLeft={0}
      paddingLeft={3}
      borderLeft={5}
      borderLeftColor="primary"
      fontStyle="italic"
    >
      {children}
    </Box>
  ),
  heading: ({ children, level }: { level: number; children: React.ReactNode }) => {
    const levelString = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return (
      <Box as={levelString} mt={level === 2 ? 6 : 4}>
        {children}
      </Box>
    );
  },
  code: ({ language, value }: { language: string; value: string }) => {
    return (
      <Box fontSize="md" overflow="auto">
        <SyntaxHighlighter
          style={atomOneDark}
          customStyle={{ padding: '1rem', borderRadius: '0.5rem' }}
          language={language}
          showLineNumbers={true}
          lineNumberStyle={{
            textAlign: 'left',
            marginLeft: '0.5rem',
            minWidth: '1rem',
            opacity: 0.5,
          }}
        >
          {value}
        </SyntaxHighlighter>
      </Box>
    );
  },
};

export default function PostTemplate({ post }: BlogStaticProps) {
  return (
    <Layout title={post.title}>
      <article>
        <HeadingSection>
          <Box as="header" row justifyContent={{ sm: 'center' }} my={6} mx={4}>
            <Box col={{ sm: 3 / 4, md: 2 / 3 }}>
              <Spaced my={3}>
                <Box as="h1" fontWeight="lighter" fontSize={{ xs: '4xl', sm: '5xl' }}>
                  {post.title}
                </Box>
                {post.subtitle && (
                  <Box
                    as="h2"
                    opacity={0.75}
                    fontWeight="normal"
                    fontSize={{ xs: 'xl', sm: '2xl' }}
                  >
                    {post.subtitle}
                  </Box>
                )}
                <Box row fontSize="lg" justifyContent="space-between">
                  <Box>{formatRelative(new Date(post.date), new Date())}</Box>
                  <Box opacity={0.75}>{post.readingTime}</Box>
                </Box>
                <Box display="flex" alignItems="baseline" flexWrap="wrap">
                  <Spaced mr={2} mb={2}>
                    {post.tags?.length && post.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </Spaced>
                </Box>
              </Spaced>
            </Box>
          </Box>
        </HeadingSection>
        <Box row justifyContent={{ sm: 'center' }} my={4} mx={4}>
          <Box col maxWidth={9}>
            <Box row justifyContent="center">
              {post.imageUrl && (
                <Box my={3} col={{ xs: 1, md: 2 / 3 }}>
                  <Image
                    src={post.imageUrl}
                    layout="responsive"
                    objectFit="cover"
                    width={800}
                    height={600}
                  />
                </Box>
              )}
              <Box col={1} fontSize={'lg'} lineHeight="copy">
                <ReactMarkdown renderers={renderers}>{post.content}</ReactMarkdown>
              </Box>
            </Box>
          </Box>
        </Box>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);

  return { props: { post } };
};

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
