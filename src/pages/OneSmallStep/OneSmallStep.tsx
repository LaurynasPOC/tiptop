import React, { useState } from 'react';
import WalkingGirlChrome from '@assets/videos/walking-girl-chrome.webm';
import Shoes from '@assets/videos/shoes-chrome.webm';
import LootBoxes from '@assets/videos/loot-boxes-chrome.webm';
import MarketPlace from '@assets/videos/marketplace-chrome.webm';
import {
  Container,
  Box,
  GridWrapper,
  TextBase,
  FlexWrapper,
  SectionWrapper,
} from '@components/wrappers';
import AnimatedVideo from '@components/AnimatedVideo';
import { SimpleLink } from '@components/links';
import Button from '@components/Button';
import { useQuery } from '@styles/breakpoints';
import { VideosSelect, IconRight } from './styled';

const OneSmallStep: React.FC = () => {
  const [active, setActive] = useState(1);
  const { isTablet } = useQuery();
  return (
    <SectionWrapper>
      <Container>
        <Box textAlign={'center'}>
          <h3>One Small Step for Man...</h3>
          <TextBase margin={'10px 0 0'}>...one giant leap for your active earning journey</TextBase>
        </Box>
        <GridWrapper col={2} colL={1} margin={isTablet ? '50px 0' : '100px 0'}>
          <AnimatedVideo
            width={'80%'}
            srcChrome={WalkingGirlChrome}
            srcSafari={
              'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/walking-girl-safari.mp4'
            }
          />
          <Box>
            <TextBase margin={'0 0 40px'}>
              Exercising or running errands is an overlooked way of making income. Movement can be
              generously rewarded.
            </TextBase>
            <TextBase>
              TipTop is a move-to-earn app that gamifies fitness. Put on your own virtual sneaker
              and start monetizing your physical activity!
            </TextBase>
          </Box>
        </GridWrapper>
        <VideosSelect active={active} col={2} colL={1}>
          <Box>
            <button onClick={() => setActive(1)}>
              <IconRight /> Unique Sneaker NFTs
            </button>
            <button onClick={() => setActive(2)}>
              <IconRight /> Random Loot Boxes
            </button>
            <button onClick={() => setActive(3)}>
              <IconRight /> Collector Marketplace
            </button>
          </Box>
          <Box>
            <AnimatedVideo
              srcSafari={'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/shoes-safari.mp4'}
              srcChrome={Shoes}
            />
            <AnimatedVideo
              srcSafari={
                'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/lootboxes-safari.mp4'
              }
              srcChrome={LootBoxes}
            />
            <AnimatedVideo
              srcSafari={
                'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/marketplace-safari.mp4'
              }
              srcChrome={MarketPlace}
            />
          </Box>
        </VideosSelect>
        <FlexWrapper gap="15px" justifyContent="center">
          <SimpleLink href={'https://m.tiptop.io/'}>
            <Button variant="primary">Marketplace</Button>
          </SimpleLink>
          <Button variant={'secondary'}>Download App</Button>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default OneSmallStep;
