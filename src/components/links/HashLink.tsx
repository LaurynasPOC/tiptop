import React from 'react';
import { HashLink as _HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

interface HashLinkStylesProps {
	color?: string;
	margin?: string | number;
	padding?: string | number;
	fontWeight?: string | number;
}

const HashLinkStyles = styled(_HashLink)<HashLinkStylesProps>`
	color: ${({ color }) => color || ''};
	margin: ${({ margin }) => margin || ''};
	padding: ${({ padding }) => padding || ''};
	font-weight: ${({ fontWeight }) => fontWeight || '300'};
`;

interface HashLinkProps {
	to: string;
	children: React.ReactNode;
}

export const HashLink: React.FC<HashLinkProps> = ({ to, children, ...rest }) => (
	<HashLinkStyles to={to} {...rest}>
		{children}
	</HashLinkStyles>
);
