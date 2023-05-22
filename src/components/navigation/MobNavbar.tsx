import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { HashLink } from '@components/links';
import { Box } from '@components/wrappers';
import styled from 'styled-components';
import { NavbarData } from './NavbarData';
import { SimpleLink } from '@components/links';

interface MobNavProps {
	isOpen: boolean;
}

const NavbarController = styled.div<MobNavProps>`
	width: 100%;
	padding: 15px 20px;
	position: fixed;
	z-index: 99;
	display: flex;
	top: 0;
	left: 0;
	justify-content: space-between;
	align-items: center;
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(15px);
	& > a > svg {
		width: 140px;
	}
	& > div {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 30px;
		height: 30px;
		margin: 10px;
		cursor: pointer;
		div {
			width: 30px;
			height: 0.3em;
			margin: 3px 0;
			background-color: ${({ isOpen }) => (isOpen ? 'var(--lbg)' : 'var(--subtext)')};
			border-radius: 20px;
			transition: all 0.5s;
			box-shadow: 0 0 0 1px white;
			:first-of-type {
				transform: ${({ isOpen }) => isOpen && 'rotate3d(0, 0, 1, 45deg) translate(3.5px, 3px)'};
			}
			:nth-of-type(2) {
				display: ${({ isOpen }) => isOpen && 'none'};
			}
			:last-of-type {
				transform: ${({ isOpen }) => isOpen && 'rotate3d(0, 0, 1, 135deg) translate(-3.7px, 3px)'};
			}
		}
	}
	& > nav {
		position: fixed;
		width: 250px;
		padding: 30px 0;
		top: 90px;
		right: 0;
		display: flex;
		flex-direction: column;
		background: rgba(0, 0, 0, 0.3);
		background-color: var(--dbg);
		backdrop-filter: blur(15px);
		transition: all 0.5s;
		${({ isOpen }) =>
			isOpen
				? `
        transform: translateX(0);
        opacity: 1;
        filter: none;
    `
				: `
        transform: translateX(100%);
        opacity: 0;
        filter: blur(5px);
    `}
		a {
			font-size: 16px;
			font-weight: 600;
			margin: 5px 30px;
			:nth-child(1n + 7) {
				color: var(--lbg);
			}
		}
	}
`;

const MobNavbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<NavbarController isOpen={isOpen}>
				<HashLink to='/'>
					<Logo />
				</HashLink>
				<Box onClick={() => setIsOpen(!isOpen)}>
					<div />
					<div />
					<div />
				</Box>
				<nav>
					{NavbarData.map(({ to, text }) => (
						<HashLink key={to} to={to}>
							{text}
						</HashLink>
					))}
					<SimpleLink href='https://m.tiptop.io/'>Marketplace</SimpleLink>
					<HashLink to='/reps'>Representatives</HashLink>
				</nav>
			</NavbarController>
		</>
	);
};

export default MobNavbar;
