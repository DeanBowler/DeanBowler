import React from 'react';
import { Layout } from '@/components/Layout';
import { MainProfile } from '@/components/Sections/MainProfile';
import { Experience } from '@/components/Sections/Experience';
import { x } from '@xstyled/styled-components';

export default function IndexPage() {
  return (
    <Layout
      title="Some things about Dean Bowler"
      includeFooter={process.env.NODE_ENV === 'development'}
    >
      <MainProfile />

      <x.div>
        <Experience />
      </x.div>
    </Layout>
  );
}
