import styled, { Box } from '@xstyled/styled-components';

import { SocialLinks } from '../components/SocialLinks';
import { Section } from '../components/Section';
import { PreloadImage } from '../components/PreloadImage';
import { hueCycleAnimation } from '../styled/keyframes';

const ProfileImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 6px 20px 3px rgba(0, 0, 0, 0.35);
  background-image: url('/me.jpg');
  background-size: contain;
  width: 128px;
  height: 128px;
  image-rendering: -webkit-optimize-contrast;
  cursor: url('/chromatic-cursor.png'), auto;

  :hover {
    background-image: url('/me-abberation.gif');
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

const PreloadHoverImage = () => <PreloadImage imageUrl="/me-abberation.gif" />;

export const MainProfile = () => (
  <Section>
    <AboutMeContainer>
      <PreloadHoverImage />
      <ProfileImage />
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
