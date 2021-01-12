import React from 'react';
import { x } from '@xstyled/styled-components';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import { Button } from '@/components/Button';

export default function IndexPage() {
  return (
    <Layout title="Page not found | Dean Bowler" forceHeaderBg="default">
      <x.div
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex="1 1 auto"
        mt={6}
      >
        <x.h1
          fontSize="9xl"
          fontWeight="lighter"
          fontFamily="monospace"
          m={0}
          p={0}
          lineHeight={1}
        >
          404
        </x.h1>
        <x.div fontSize="2xl" m={5}>
          You seem to be lost
        </x.div>
        <Link href="/" passHref>
          <Button as="a">TAKE ME HOME</Button>
        </Link>
      </x.div>
    </Layout>
  );
}
