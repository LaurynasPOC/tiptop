import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Blob = styled.div`
	aspect-ratio: 1;
	position: absolute;
	z-index: 1000;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	animation: rotate 4s infinite;
	opacity: 0.8;
	/* backdrop-filter: blur(120px); */
	box-shadow: 20px 10px 180px 50px var(--lbg);
	/* border-radius: 100%; */
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		50% {
			transform: scale(0.3, 0.4);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;

const MouseMoveAnimation: React.FC = () => {
	const blobRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const blob = blobRef.current;

		const onMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			const scrollY = window.pageYOffset;
			blob?.animate(
				{
					left: `${clientX}px`,
					top: `${clientY + scrollY}px`,
				},
				{ duration: 0, fill: 'forwards' },
			);
		};
		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return <Blob ref={blobRef} />;
};

export default MouseMoveAnimation;
