import Head from 'next/head';
import React from 'react';

interface SeoProps {
  title: string;
}

export const Seo = ({ title }: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="author" content="Dean Bowler" />
    <meta
      name="description"
      content="Full stack web developer, specializing in React powered frontend development"
    />
    <meta
      name="keywords"
      content="Frontend Developer, React Developer, Web Developer, Software Engineer"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,700&display=swap"
      rel="stylesheet"
    />
  </Head>
);
