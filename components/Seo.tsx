import Head from 'next/head';
import React from 'react';

interface SeoProps {
  title: string;
  type?: 'website' | 'article';
}

export const Seo = ({ title, type = 'website' }: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="author" content="Dean Bowler" />
    <meta
      name="og:image"
      content="https://deanbowler.dev/images/seo/ogmeta-default.jpg"
    />
    <meta name="og:type" content={type} />
    <meta
      name="description"
      content="Full stack web developer, specializing in React powered frontend development"
    />
    <meta
      name="keywords"
      content="Frontend Developer, React Developer, Web Developer, Software Engineer"
    />
  </Head>
);
