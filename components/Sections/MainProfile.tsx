import styled, { x } from '@xstyled/styled-components';
import Image from 'next/image';

import { SocialLinks } from '@/components/SocialLinks';
import { HeadingSection } from '@/components/HeadingSection';
import { hueCycleAnimation } from '@/styled/keyframes';
import { NowPlaying } from '../NowPlaying';

const ProfileImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 6px 20px 3px rgba(0, 0, 0, 0.35);
  width: 128px;
  height: 128px;
  cursor: url('/images/chromatic-cursor.png'), auto;

  :hover {
    animation: ${hueCycleAnimation} 2s ease-in-out infinite;
  }
`;

export const MainProfile = () => {
  return (
    <HeadingSection fullHeight={true}>
      <x.div display="flex" flex="1 1 auto" color="white" userSelect="none">
        <x.div display="grid" gridAutoFlow="rows" gridAutoRows="1fr max-content" w="100%">
          <x.div
            display="flex"
            textAlign="center"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            <ProfileImageContainer>
              <Image
                src="/images/me.jpg"
                width="128"
                height="128"
                alt="Profile Picture"
                priority={true}
                loading="eager"
              />
            </ProfileImageContainer>
            <x.h1
              fontSize={{ xs: '4xl', sm: '6xl' }}
              fontWeight="lighter"
              margin={0}
              marginTop={3}
              lineHeight="solid"
            >
              Dean Bowler
            </x.h1>
            <x.div fontSize={{ xs: 'xl', sm: '2xl' }} fontWeight="normal">
              Web Developer
            </x.div>
            <SocialLinks />
          </x.div>
          <x.div m={{ xs: 3, sm: 4 }} minHeight={3}>
            <NowPlaying />
          </x.div>
        </x.div>
      </x.div>
    </HeadingSection>
  );
};
