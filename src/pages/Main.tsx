import React from 'react';
import Video from '@components/Video';
import HeroVideo from '../assets/videos/hero-video.mp4';
import EveryStep from './EveryStep/EveryStep';
import OneSmallStep from './OneSmallStep/OneSmallStep';
import CarouselComponent from './Carousel/Carousel';
import JoinTipTop from './JoinTipTop/JoinTipTop';
import Roadmap from './Roadmap/Roadmap';
import Tokenomics from './Tokenomics/Tokenomics';

const Main: React.FC = () => {
	return (
		<>
			<Video src={HeroVideo} bottom='200px' />
			<EveryStep />
			<OneSmallStep />
			<CarouselComponent />
			<JoinTipTop />
			<Roadmap />
			<Tokenomics />
			<EveryStep />
		</>
	);
};

export default Main;
