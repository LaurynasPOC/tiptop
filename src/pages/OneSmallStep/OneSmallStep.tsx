import React, { useState } from 'react';
import styled from 'styled-components';
import WalkingGirlChrome from '@assets/videos/walking-girl-chrome.webm';
import Shoes from '@assets/videos/shoes-chrome.webm';
import LootBoxes from '@assets/videos/loot-boxes-chrome.webm';
import MarketPlace from '@assets/videos/marketplace-chrome.webm';
import { Container, SectionWrapper, Box, GridWrapper, TextBase, FlexWrapper } from '@components/wrappers';
import AnimatedVideo from '@components/AnimatedVideo';
import { tablet } from '@styles/breakpoints';
import { SimpleLink } from '@components/links';
import Button from '@components/Button';
import { useQuery } from '@styles/breakpoints';

interface Props {
	active: number;
}

const IconRight = styled.div`
	width: 0;
	height: 0;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-left: 10px solid var(--lbg);
	margin-right: 20px;
`;

const VideosSelect = styled(GridWrapper)<Props>`
	margin: 100px 0;
	& > div {
		&:first-child {
			button {
				min-width: 310px;
				display: flex;
				align-items: center;
				outline: none;
				appearance: none;
				padding: 30px;
				border: none;
				color: var(--text);
				font-size: 20px;
				background: none;
				border-radius: 20px;
				cursor: pointer;
				svg {
					margin-right: 20px;
				}
				${({ active }) =>
					active &&
					`
                    &:nth-child(${active}) {
                        background: #35A6B633;
                    }
                `}
			}
		}
		&:last-child {
			img {
				width: 100%;
			}
		}
	}
	& > div:nth-of-type(2) {
		position: relative;
		padding: 150px;
		video {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			visibility: hidden;
			height: 100%;
			width: 100%;
		}
		video:nth-of-type(${({ active }) => active}) {
			visibility: visible;
		}
		video:nth-of-type(2) {
			width: 120%;
			height: 120%;
		}
	}
	@media ${tablet} {
		margin: 40px 0;
		button {
			width: 100%;
		}
	}
`;

const OneSmallStep: React.FC = () => {
	const [active, setActive] = useState(1);
	const { isTablet } = useQuery();
	return (
		<SectionWrapper>
			<Container>
				<Box textAlign={'center'}>
					<h2>One Small Step for Man...</h2>
					<TextBase margin={'10px 0 0'}>...one giant leap for your active earning journey</TextBase>
				</Box>
				<GridWrapper col={2} colL={1} margin={isTablet ? '50px 0' : '100px 0'}>
					<AnimatedVideo
						width={'80%'}
						srcChrome={WalkingGirlChrome}
						srcSafari={'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/walking-girl-safari.mp4'}
					/>
					<Box>
						<TextBase margin={'0 0 40px'}>
							Exercising or running errands is an overlooked way of making income. Movement can be generously rewarded.
						</TextBase>
						<TextBase>
							TipTop is a move-to-earn app that gamifies fitness. Put on your own virtual sneaker and start monetizing your physical
							activity!
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
						<AnimatedVideo srcSafari={'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/shoes-safari.mp4'} srcChrome={Shoes} />
						<AnimatedVideo
							srcSafari={'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/lootboxes-safari.mp4'}
							srcChrome={LootBoxes}
						/>
						<AnimatedVideo
							srcSafari={'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/marketplace-safari.mp4'}
							srcChrome={MarketPlace}
						/>
					</Box>
				</VideosSelect>
				<FlexWrapper gap='15px' justifyContent='center'>
					<SimpleLink href={'https://m.tiptop.io/'}>
						<Button variant='primary'>Marketplace</Button>
					</SimpleLink>
					<Button variant={'secondary'}>Download App</Button>
				</FlexWrapper>
			</Container>
		</SectionWrapper>
	);
};

export default OneSmallStep;
