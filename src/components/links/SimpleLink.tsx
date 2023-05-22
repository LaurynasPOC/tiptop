import React from 'react';
import styled from 'styled-components';

interface SimpleLinkStyleProps {
	color?: string;
	margin?: string | number;
	padding?: string | number;
	width?: string | number;
	fontWeight?: string | number;
}

const SimpleLinkStyles = styled.a<SimpleLinkStyleProps>`
	color: ${({ color }) => color || ''};
	margin: ${({ margin }) => margin || ''};
	padding: ${({ padding }) => padding || ''};
	width: ${({ width }) => width || ''};
	font-weight: ${({ fontWeight }) => fontWeight || '300'};
`;

interface SimpleLinkProps {
	href: string;
	children: React.ReactNode;
}

export const SimpleLink: React.FC<SimpleLinkProps> = ({ href, children, ...rest }) => (
	<SimpleLinkStyles href={href} target='_blank' rel='noopener noreferrer' {...rest}>
		{children}
	</SimpleLinkStyles>
);
