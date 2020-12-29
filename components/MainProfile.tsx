import Image from 'next/image';

import styled, { Box, keyframes } from '@xstyled/styled-components';

import { SocialLinks } from '../components/SocialLinks';
import { Section } from '../components/Section';

const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 6px 20px 3px rgba(0, 0, 0, 0.35);
`;

const hueCycleAnimation = keyframes`
from {
  filter: hue-rotate(0deg);
}
to {
  filter: hue-rotate(360deg);
}
`;

const ProfileImage = styled(Image)`
  :hover {
    animation: ${hueCycleAnimation} 3s ease-in-out infinite;
  }
`;

const AboutMeContainer = styled.box`
  user-select: none;
`;

export const MainProfile = () => (
  <Section>
    <AboutMeContainer
      display="flex"
      flex="1 1 auto"
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={2}
      marginBottom={6}
      color="white"
    >
      <ImageContainer>
        <ProfileImage
          src="/me.jpg"
          alt="Picture of me"
          width={128}
          height={128}
          priority={true}
        />
      </ImageContainer>
      <Box
        fontSize={{ xs: 6, sm: 8 }}
        as="h1"
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
  </Section>
);
