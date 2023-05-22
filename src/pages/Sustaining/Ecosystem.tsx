import React from 'react';
import styled from 'styled-components';
import Button from '@components/Button';
import { Container, GridWrapper, FlexWrapper, SectionWrapper } from '@components/wrappers';
import { SimpleLink } from '@components/links';
import AnimatedVideo from '@components/AnimatedVideo';

const EcosystemStyles = styled(SectionWrapper)`
	background: #1a323c;
	padding: 120px 0;
	@media (max-width: 1023px) {
		padding: 50px 0;
	}
	& > div > div {
		@media (max-width: 1023px) {
			display: flex;
			flex-direction: column-reverse;
		}
	}
	& > div > div > div:first-of-type {
		h3 {
			font-size: 48px;
			font-weight: 600;
		}
		p {
			padding: 40px 0 80px 0;
			font-size: 20px;
			font-weight: 300;
			line-height: 2;
		}
		@media (max-width: 1023px) {
			max-width: 600px;
			margin: 0 auto;
			text-align: center;
			h3 {
				font-size: 32px;
			}
			p {
				font-size: 16px;
			}
			div {
				justify-content: center;
				@media (max-width: 464px) {
					width: 100%;
					flex-direction: column;
					& > a > button {
						width: 100%;
						padding: 15px 0;
						margin: 10px 0;
						margin-left: 0;
					}
					a {
						width: 100%;
					}
				}
			}
		}
	}
	& > div > div > div:last-of-type {
		text-align: center;
	}
	a:first-of-type {
		margin-right: 20px;
	}
	@media (max-width: 468px) {
		video {
			width: 80%;
			margin: -170px auto -130px;
		}
	}
`;

interface Props {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const Ecosystem:React.FC<Props> = ({ isOpen, setIsOpen }) => {
	return (
		<EcosystemStyles>
			<Container>
				<GridWrapper col={2}>
					<div>
						<h3>Self-Sustaining Ecosystem</h3>
						<p>
							TipTop prioritizes project stability above all else. That is why up to 90% of $TIP tokens will be reintroduced back into the
							game to maintain in-app economy. There is also an element of circularity - users can resell their NFTs on the marketplace or
							merge two shoes into a better type, at 100% success rate.
						</p>
						<FlexWrapper>
							<SimpleLink href='/links'>
								<Button variant='primary'>Join Our Community</Button>
							</SimpleLink>
							<Button onClick={() => setIsOpen(!isOpen)}>Download App</Button>
						</FlexWrapper>
					</div>
					<div>
						<AnimatedVideo
							width={'500px'}
							height='600px'
							srcSafari={'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/token-red-safari.mp4'}
							srcChrome={'https://tiptop-media.s3.eu-central-1.amazonaws.com/mp4/token-red-chrome.webm'}
						/>
					</div>
				</GridWrapper>
			</Container>
		</EcosystemStyles>
	);
};

export default Ecosystem;