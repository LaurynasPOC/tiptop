import React from 'react';
import {
  SectionWrapper,
  Container,
  Box,
  GridWrapper,
  FlexWrapper,
  TextBase,
} from '@components/wrappers';
import styled from 'styled-components';
import AnimatedVideo from '@components/AnimatedVideo';
import TipTopApp from '@assets/videos/3d-phone-chrome.webm';
import { ReactComponent as AppleStore } from '@assets/svg/app-store.svg';
import { ReactComponent as GoogleStore } from '@assets/svg/google-play.svg';
import { SimpleLink } from '@components/links';
import { useQuery } from '@styles/breakpoints';
import { JoinTipTopData } from './Data';
import { InfoStyles } from './styled';

const JoinTipTop: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper backgroundColor="var(--lbg)">
      <Container>
        <GridWrapper col={2} colL={1}>
          <Box>
            <AnimatedVideo
              width={isTablet ? '100%' : '80%'}
              srcChrome={TipTopApp}
              srcSafari="https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/3d-phone-safari.mov"
            />
          </Box>
          <Box>
            <h3>Join TipTop in 3 easy Steps</h3>
            <Box margin={'50px 0 0'}>
              {JoinTipTopData.map(({ span, h6, p }) => (
                <InfoStyles justifyContent={'start'} colExact="60px auto">
                  <span>{span}</span>
                  <Box>
                    <h6>{h6}</h6>
                    <TextBase fontSize="20px">{p}</TextBase>
                  </Box>
                </InfoStyles>
              ))}
            </Box>
            <FlexWrapper margin="80px 0 0" gap="20px">
              <SimpleLink href="https://play.google.com/">
                <GoogleStore width="100%" />
              </SimpleLink>
              <SimpleLink href="https://www.apple.com/app-store/">
                <AppleStore width="100%" />
              </SimpleLink>
            </FlexWrapper>
          </Box>
        </GridWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default JoinTipTop;
