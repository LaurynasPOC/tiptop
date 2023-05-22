import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container, SectionWrapper } from '@components/wrappers';
import { SimpleLink } from '@components/links';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Img1 from '@assets/photos/slide1.webp';
import Img2 from '@assets/photos/slide2.webp';
import Img3 from '@assets/photos/slide3.webp';
import { useQuery } from '@styles/breakpoints';
import styled from 'styled-components';
import RedBgLine from '../../assets/photos/red-lines-bg.png';
import { desktop, mobile, tablet } from '@styles/breakpoints';

interface Props {
	active: boolean;
}

const CarouselStyles = styled(SectionWrapper)`
	position: relative;
	background-image: url(${RedBgLine});
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-color: var(--lbg);
	@media ${mobile} {
		background-size: 100% 80%;
	}
	& > div:first-of-type {
		position: absolute;
		margin: -2px -40px 0;
		top: 0;
		z-index: 0;
		width: 110%;
		height: 1500px;
		background-color: var(--dbg);
		clip-path: polygon(0 0, 100% 0, 100% 27%, 0 5%);
		@media ${tablet} {
			clip-path: polygon(0 0, 100% 0, 100% 30%, 0 10%);
		}
	}
	& > div:last-of-type {
		position: relative;
		z-index: 1;
		max-width: 1500px;
		margin: 0 auto;
		border-radius: 20px;
		background-color: var(--subbg);
		.carousel .control-dots {
			display: flex;
			margin-left: 100px;
			margin-bottom: 50px;
			& > div {
				cursor: pointer;
			}
		}
	}
`;

interface SlideProp {
	img: string;
}

export const Slide = styled.div<SlideProp>`
	text-align: left;
	@media ${!desktop} {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		height: 700px;
		& > div:last-child {
			& > div {
				position: absolute;
				left: 0;
				bottom: 60px;
				padding: 20px;
				background: var(--lbg);
				max-width: 40%;
			}
			& > div > i {
				font-size: 20px;
				line-height: 30px;
			}
			& > div > p {
				font-style: italic;
				font-weight: 400;
				font-size: 16px;
				line-height: 24px;
				padding-top: 24px;
			}
		}
	}
	& > div:last-child {
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		position: relative;
		background-image: url(${({ img }) => img});
		background-size: cover;
		background-position: center;
		@media ${desktop} {
			border-bottom-right-radius: 0;
			border-top-left-radius: 20px;
		}
	}
	& > div:first-child {
		padding: 80px;
		h3 {
			margin-top: 10px;
			margin-bottom: 20px;
			font-size: 48px;
			font-weight: 600;
		}
		button {
			margin-top: 80px;
		}
	}
	@media ${desktop} {
		display: flex;
		flex-direction: column-reverse;
		justify-content: start;
		height: 100%;
		& > div:first-child {
			padding: 0 20px 100px;
			h3 {
				font-size: 24px;
			}
			button {
				margin-top: 40px;
			}
		}
		& > div:last-child {
			height: 300px;
			& > div {
				display: none;
			}
		}
	}
`;

const SliderIndicator = styled.div<Props>`
	display: flex;
	width: 0;
	height: 0;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-left: 13.5px solid var(--lbg);
	margin-right: 15px;
	opacity: ${({ active }) => !active && '0.4'};
`;

const SliderPrev = styled.div<Props>`
	cursor: pointer;
	position: absolute;
	z-index: 1;
	width: 0;
	height: 0;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-right: 10px solid var(--lbg);
	bottom: 60px;
	right: 120px;
	opacity: ${({ active }) => !active && '0.4'};
`;

const SliderNext = styled.div<Props>`
	cursor: pointer;
	position: absolute;
	width: 0;
	height: 0;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-left: 10px solid var(--lbg);
	bottom: 60px;
	right: 60px;
	opacity: ${({ active }) => !active && '0.4'};
`;

const CarouselComponent = () => {
	const { isDesktop } = useQuery();
	return (
		<CarouselStyles>
			<div />
			<Carousel
				renderIndicator={(clickHandler, isSelected) => <SliderIndicator onClick={clickHandler} active={isSelected} />}
				renderArrowPrev={(clickHandler, hasPrev) => isDesktop && <SliderPrev onClick={clickHandler} active={hasPrev} />}
				renderArrowNext={(clickHandler, hasNext) => isDesktop && <SliderNext onClick={clickHandler} active={hasNext} />}
				showArrows={isDesktop}
				preventMovementUntilSwipeScrollTolerance={true}
				swipeScrollTolerance={50}
				showStatus={false}
				showThumbs={false}
				showIndicators={!isDesktop}
				autoPlay
				infiniteLoop={!isDesktop}
				interval={7000}>
				<Slide img={Img1}>
					<div>
						<h3>Embrace Active Lifestyle</h3>
						<p>Walk your dog. Jog in the park. Hike a mountain. Stay active.</p>
						<br />
						<p>
							TipTop allows you to explore the physical world in a new dynamic way. We reward active lifestyle to help you form healthy
							habits and improve your physical and mental health.
						</p>
						<Link to='/links'>
							<Button variant='primary'>Join Our Community</Button>
						</Link>
					</div>
					<div>
						<div>
							<i>“Everywhere is within walking distance if you have the time.”</i>
							<p>– Steven Wright</p>
						</div>
					</div>
				</Slide>
				<Slide img={Img2}>
					<div>
						<h3>Earn Through Movement</h3>
						<p>All exercise should be profitable. Period.</p>
						<br />
						<p>
							TipTop transforms all physical activity into a financially rewarding journey. With us, you can make income simply through
							movement. Achieve your fitness and financial goals at the same time!
						</p>
						<Button variant='primary'>Download App</Button>
					</div>
					<div>
						<div>
							<i>“A journey of a thousand miles must begin with a single step.”</i>
							<p>– Lao Tzu</p>
						</div>
					</div>
				</Slide>
				<Slide img={Img3}>
					<div>
						<h3>Limit Your Carbon Footprint</h3>
						<p>We are committed to carbon neutrality in Web 3.0.</p>
						<br />
						<p>
							TipTop rewards movement to help us all reduce our environmental footprint. Our numerous partnerships and green initiatives
							with environmentally conscious companies demonstrate our commitment to a sustainable way of life.
						</p>
						<SimpleLink href='/contact'>
							<Button variant='primary'>Partnership Prospects</Button>
						</SimpleLink>
					</div>
					<div>
						<div>
							<i>“We cannot live on this planet as if we had another one to go to.”</i>
							<p> - Terri Swearingen</p>
						</div>
					</div>
				</Slide>
			</Carousel>
		</CarouselStyles>
	);
};

export default CarouselComponent;
