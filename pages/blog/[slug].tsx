import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { x } from '@xstyled/styled-components';
import { formatRelative } from 'date-fns';

import Spaced from '@/styled/Spaced';
import { getAllPosts, getPostBySlug, PostProps } from '@/lib/posts';
import { Layout } from '@/components/Layout';
import { HeadingSection } from '@/components/HeadingSection';
import { Tag } from '@/components/Tag';

interface BlogStaticProps {
  post: PostProps;
}

const renderers = {
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <x.div
      as="blockquote"
      marginLeft={0}
      paddingLeft={3}
      borderLeft={5}
      borderLeftColor="primary"
      fontStyle="italic"
    >
      {children}
    </x.div>
  ),
  heading: ({ children, level }: { level: number; children: React.ReactNode }) => {
    const levelString = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return (
      <x.div as={levelString} mt={level === 2 ? 5 : 4} mb={0}>
        {children}
      </x.div>
    );
  },
  code: ({ language, value }: { language: string; value: string }) => {
    return (
      <x.div overflow="auto" mx={-2}>
        <SyntaxHighlighter
          style={atomOneDark}
          customStyle={{
            padding: '1rem',
            borderRadius: '0.5rem',
          }}
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
      </x.div>
    );
  },
};

export default function PostTemplate({ post }: BlogStaticProps) {
  return (
    <Layout title={post.title}>
      <x.article w="100%">
        <HeadingSection>
          <x.div as="header" row justifyContent={{ sm: 'center' }} my={6} mx={4}>
            <x.div col={{ sm: 3 / 4, md: 2 / 3 }}>
              <Spaced my={3}>
                <x.div as="h1" fontWeight="lighter" fontSize={{ xs: '4xl', sm: '5xl' }}>
                  {post.title}
                </x.div>
                {post.subtitle && (
                  <x.div
                    as="h2"
                    opacity={0.75}
                    fontWeight="normal"
                    fontSize={{ xs: 'xl', sm: '2xl' }}
                  >
                    {post.subtitle}
                  </x.div>
                )}
                <x.div row fontSize="lg" justifyContent="space-between">
                  <x.div>{formatRelative(new Date(post.date), new Date())}</x.div>
                  <x.div opacity={0.75}>{post.readingTime}</x.div>
                </x.div>
                <x.div display="flex" alignItems="baseline" flexWrap="wrap">
                  <Spaced mr={2} mb={2}>
                    {post.tags?.length && post.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </Spaced>
                </x.div>
              </Spaced>
            </x.div>
          </x.div>
        </HeadingSection>
        <x.div row justifyContent={{ sm: 'center' }} my={4} mx={4} maxWidth="100%">
          <x.div row justifyContent="center" w="100%" maxWidth={9}>
            {post.imageUrl && (
              <x.div my={3} col={{ xs: 1, md: 2 / 3 }}>
                <Image
                  src={post.imageUrl}
                  title={post.imageTitle}
                  layout="responsive"
                  objectFit="cover"
                  width={800}
                  height={600}
                />
              </x.div>
            )}
            <x.div col={1} fontSize={'lg'} lineHeight="copy">
              <ReactMarkdown renderers={renderers}>{post.content}</ReactMarkdown>
            </x.div>
          </x.div>
        </x.div>
      </x.article>
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
