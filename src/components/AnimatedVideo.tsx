import React, { useRef, useEffect } from 'react';

interface Props {
	width?: string;
	height?: string;
	srcSafari: string;
	srcChrome: string;
}

const AnimatedVideo: React.FC<Props> = ({ srcSafari, srcChrome, width, height }) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 1;
		}
	}, [videoRef]);

	return (
		<video ref={videoRef} disableRemotePlayback={true} width={width} height={height} autoPlay preload='auto' loop playsInline muted>
			<source src={srcSafari} type='video/mp4; codecs="hvc1"' />
			<source src={srcChrome} type='video/webm' />
		</video>
	);
};

export default AnimatedVideo;
