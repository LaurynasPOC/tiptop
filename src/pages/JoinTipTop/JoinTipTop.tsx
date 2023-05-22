import React from 'react';
import { SectionWrapper, Container, Box, GridWrapper, FlexWrapper, TextBase } from '@components/wrappers';
import styled from 'styled-components';
import AnimatedVideo from '@components/AnimatedVideo';
import TipTopApp from '@assets/videos/3d-phone-chrome.webm';
import { ReactComponent as AppleStore } from '@assets/svg/app-store.svg';
import { ReactComponent as GoogleStore } from '@assets/svg/google-play.svg';
import { SimpleLink } from '@components/links';
import { useQuery } from '@styles/breakpoints';

const InfoStyles = styled(GridWrapper)`
	margin: 40px 0;
	span {
		font-size: 24px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		height: 60px;
		width: 60px;
		border-radius: 100%;
	}
	h6 {
		font-size: 20px;
	}
`;

const JoinTipTopData = [
	{
		span: 1,
		h6: 'Download the TipTop App',
		p: 'You can find the app on Google Play or Apple Play Store',
	},
	{
		span: 2,
		h6: 'Register an Account',
		p: 'By registering, you agree with our Terms and Privacy Policy',
	},
	{
		span: 3,
		h6: 'Move to Earn',
		p: 'Put on the Premium Sneaker and give TipTop a try!',
	},
];

const JoinTipTop: React.FC = () => {
	const { isTablet } = useQuery();
	return (
		<SectionWrapper backgroundColor='var(--lbg)'>
			<Container>
				<GridWrapper col={2} colL={1}>
					<Box>
						<AnimatedVideo
							width={isTablet ? '100%' : '80%'}
							srcChrome={TipTopApp}
							srcSafari='https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/3d-phone-safari.mov'
						/>
					</Box>
					<Box>
						<h3>Join TipTop in 3 easy Steps</h3>
						<Box margin={'50px 0 0'}>
							{JoinTipTopData.map(({ span, h6, p }) => (
								<InfoStyles justifyContent={'start'} colExact='60px auto'>
									<span>{span}</span>
									<Box>
										<h6>{h6}</h6>
										<TextBase fontSize='20px'>{p}</TextBase>
									</Box>
								</InfoStyles>
							))}
						</Box>
						<FlexWrapper margin='80px 0 0' gap='20px'>
							<SimpleLink href='https://play.google.com/'>
								<GoogleStore width='100%' />
							</SimpleLink>
							<SimpleLink href='https://www.apple.com/app-store/'>
								<AppleStore width='100%' />
							</SimpleLink>
						</FlexWrapper>
					</Box>
				</GridWrapper>
			</Container>
		</SectionWrapper>
	);
};

export default JoinTipTop;
