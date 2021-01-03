import styled, { Box } from '@xstyled/styled-components';
import Image from 'next/image';

import { SocialLinks } from '../components/SocialLinks';
import { HeadingSection } from '../components/HeadingSection';
import { hueCycleAnimation } from '../styled/keyframes';

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

const AboutMeContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2;
  margin-bottom: 6;
  color: white;
  user-select: none;
`;

export const MainProfile = () => {
  return (
    <HeadingSection fullHeight={true}>
      <AboutMeContainer>
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
        <Box
          as="h1"
          fontSize={{ xs: 6, sm: 8 }}
          fontWeight="lighter"
          margin={0}
          marginTop={3}
          lineHeight="solid"
        >
          Dean Bowler
        </Box>
        <Box fontSize={{ xs: 4, sm: 5 }} fontWeight="normal">
          Web Developer
        </Box>
        <SocialLinks />
      </AboutMeContainer>
    </HeadingSection>
  );
};
