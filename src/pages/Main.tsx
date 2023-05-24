import React, { useState } from 'react';
import { SimpleLink } from '@components/links';
import { FlexWrapper } from '@components/wrappers';
import Video from '@components/Video';
import HeroVideo from '../assets/videos/hero-video.mp4';
import EveryStep from './EveryStep/EveryStep';
import OneSmallStep from './OneSmallStep/OneSmallStep';
import CarouselComponent from './Carousel/Carousel';
import JoinTipTop from './JoinTipTop/JoinTipTop';
import Roadmap from './Roadmap/Roadmap';
import Tokenomics from './Tokenomics/Tokenomics';
import Faq from './FAQ/Faq';
import Ecosystem from './Sustaining/Ecosystem';
import GoogleImg from '@assets/svg/google_play.svg';
import ApkImg from '@assets/svg/apk.svg';
import AppStore from '@assets/svg/app_store.svg';
import Modal from '@components/Modal';
import { useQuery } from '@styles/breakpoints';
import Subscribe from './Subscribe/Subscribe';
import Footer from '@components/footer/Footer';

const Main: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useQuery();
  return (
    <>
      {!isDesktop && <Video src={HeroVideo} />}
      <EveryStep isOpen={isOpen} setIsOpen={setIsOpen} />
      <OneSmallStep />
      <CarouselComponent />
      <JoinTipTop />
      <Roadmap />
      <Tokenomics />
      <Ecosystem isOpen={isOpen} setIsOpen={setIsOpen} />
      <Faq />
      <Subscribe />
      <Footer />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 style={{ fontSize: '36px' }}>Download the TipTop App</h3>
        <FlexWrapper flexDirection="column" padding="30px 40px">
          <SimpleLink href="https://play.google.com/store/apps/details?id=com.tiptop.io">
            <img src={GoogleImg} alt="TipTop" />
          </SimpleLink>
          <SimpleLink href="https://tiptop.io/app.apk">
            <img src={ApkImg} alt="TipTop" />
          </SimpleLink>
          <SimpleLink href="https://apps.apple.com/app/tiptop-sneakers/id6444293849">
            <img src={AppStore} alt="TipTop" />
          </SimpleLink>
        </FlexWrapper>
      </Modal>
    </>
  );
};

export default Main;
