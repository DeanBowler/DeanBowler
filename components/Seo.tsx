import Head from 'next/head';
import React from 'react';

export interface SeoProps {
  title: string;
  type?: 'website' | 'article';
  image?: string;
  description?: string;
  keywords?: string;
}

export const Seo = ({
  title,
  type = 'website',
  image = 'https://deanbowler.dev/images/seo/ogmeta-default.jpg',
  description = 'Full stack web developer, specializing in React powered frontend development',
  keywords = 'Frontend Developer, React Developer, Web Developer, Software Engineer',
}: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="author" content="Dean Bowler" />
    <meta name="og:image" content={image} />
    <meta name="og:type" content={type} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>
);
