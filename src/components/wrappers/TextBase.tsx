import styled from 'styled-components';
import { desktop, mobile } from '@styles/breakpoints';

interface TextBaseProps {
	margin?: string | number;
	padding?: string | number;
	fontSize?: string;
	textAlign?: string | number;
	borderRadius?: string;
	width?: string | number;
	height?: string | number;
	lineHeight?: string | number;
	fontWeight?: number;
	opacity?: number | string;
	textDecoration?: string;
	textTransform?: string;
}

export const TextBase = styled.p<TextBaseProps>`
	margin: ${({ margin }) => margin || ''};
	padding: ${({ padding }) => padding || ''};
	font-size: ${({ fontSize }) => fontSize || '24px'};
	line-height: ${({ lineHeight }) => lineHeight || ''};
	font-weight: ${({ fontWeight }) => fontWeight || 400};
	color: ${({ color }) => color || 'var(--subtext)'};
	text-align: ${({ textAlign }) => textAlign || ''};
	text-decoration: ${({ textDecoration }) => textDecoration || ''};
	text-transform: ${({ textTransform }) => textTransform || ''};
	opacity: ${({ opacity }) => opacity || ''};
	width: ${({ width }) => width || ''};
	@media ${desktop} {
		font-size: ${({ fontSize }) => fontSize || '20px'};
	}
	@media ${mobile} {
		font-size: ${({ fontSize }) => fontSize || '16px'};
	}
`;
