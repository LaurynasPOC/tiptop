import styled from 'styled-components';
import { desktop, tablet } from '@styles/breakpoints';

interface ContainerProps {
	width?: string | number;
	padding?: string;
}

export const Container = styled.div<ContainerProps>`
	max-width: ${({ width }) => width || '1300px'};
	padding: ${({ padding }) => padding || '40px'};
	margin-left: auto;
	margin-right: auto;
	@media ${desktop} {
		padding: 30px;
	}
	@media ${tablet} {
		padding: 20px;
	}
`;
