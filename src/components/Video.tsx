import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconOn } from '@assets/svg/sound_on.svg';
import { ReactComponent as IconOff } from '@assets/svg/sound_off.svg';
import Preloader from '@assets/svg/preloader.svg';

interface Props {
	bottom?: string | number;
}

const VideoStyles = styled.div<Props>`
	position: relative;
	width: 100vw;
	height: 100%;
	video {
		background-image: url(${Preloader});
		background-position: center;
		background-repeat: no-repeat;
		width: 100%;
	}
	& > svg {
		cursor: pointer;
		position: absolute;
		bottom: ${({ bottom }) => bottom || '200px'};
		right: 40px;
	}
`;

interface VideoProps extends Props {
	src: string;
}

const Video: React.FC<VideoProps> = ({ src, bottom }) => {
	const [muted, setMuted] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 1;
		}
	}, [videoRef]);

	const toggleMute = () => {
		setMuted(!muted);
	};

	return (
		<VideoStyles bottom={bottom}>
			<video ref={videoRef} autoPlay muted={muted} preload='auto' playsInline loop>
				<source src={src} type='video/mp4' />
			</video>
			{muted ? <IconOff onClick={toggleMute} /> : <IconOn onClick={toggleMute} />}
		</VideoStyles>
	);
};

export default Video;
