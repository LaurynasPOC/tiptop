import React from 'react';
import { Container, GridWrapper, FlexWrapper, TextBase } from '@components/wrappers';
import Button from '@components/Button';
import AnimatedVideo from '@components/AnimatedVideo';
import PhonesVideo from '../../assets/videos/phones-section1.webm';
import { ReactComponent as Icon1 } from '../../assets/svg/every-step1.svg';
import { ReactComponent as Icon2 } from '../../assets/svg/every-step2.svg';
import { ReactComponent as Icon3 } from '../../assets/svg/every-step3.svg';
import { ReactComponent as Icon4 } from '../../assets/svg/every-step4.svg';
import { EveryStepStyles, ImgBox } from './styled';

const Boxes = [
	{
		img: <Icon1 />,
		text: 'Active Lifestyle',
	},
	{
		img: <Icon2 />,
		text: 'Rewarding Ecosystem',
	},
	{
		img: <Icon3 />,
		text: 'Unique Collectibles',
	},
	{
		img: <Icon4 />,
		text: 'Sustainable Choice',
	},
];

const EveryStep: React.FC = () => {
	return (
		<EveryStepStyles>
			<div>
				<Container>
					<GridWrapper col={2} colL={1}>
						<div>
							<h1>Every Step Counts</h1>
							<TextBase margin='40px 0'>Get in Tip-Top shape and earn real rewards through movement within a self-sustaining ecosystem.</TextBase>
							<FlexWrapper>
								<Button variant={'primary'}>Download App</Button>
							</FlexWrapper>
						</div>
						<AnimatedVideo width='100%' srcSafari={'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/phone-safari.mov'} srcChrome={PhonesVideo} />
					</GridWrapper>
					<GridWrapper margin='40px 0 0' width={'100%'} col={4} colXl={2} colSm={1}>
						{Boxes.map(({ img, text }) => (
							<FlexWrapper alignItems='center'>
								<ImgBox margin='0 40px 0 0'>{img}</ImgBox>
								<TextBase width='110px' fontSize={'18px'}>
									{text}
								</TextBase>
							</FlexWrapper>
						))}
					</GridWrapper>
				</Container>
			</div>
		</EveryStepStyles>
	);
};

export default EveryStep;
