import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Blob = styled.div`
	aspect-ratio: 1;
	position: absolute;
	z-index: 1000;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	background: var(--dbg);
	animation: rotate 20s infinite;
	opacity: 0.8;
	backdrop-filter: blur(120px);
	box-shadow: 0 0 180px 30px var(--text);
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		50% {
			transform: scale(1, 1.4);
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
