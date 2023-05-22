import styled from 'styled-components';
import { mobile } from '../styles/breakpoints';

interface ButtonStylesProps {
	margin?: number | string;
	backgroundColor?: string;
}

const BaseButton = styled.button<ButtonStylesProps>`
	margin: ${({ margin }) => margin || ''};
	padding: 12px 25px;
	color: #35a6b6;
	border-radius: 8px;
	border: 1px solid #35a6b6;
	appearance: none;
	box-shadow: none;
	font-weight: 600;
	font-size: 16px;
	transition: all 0.25s ease-out;
	background: ${({ backgroundColor }) => backgroundColor || 'rgba(0, 0, 0, 0.0)'};
	backdrop-filter: blur(15px);
	:hover {
		background: rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
	:disabled {
		cursor: not-allowed;
		background: rgba(0, 0, 0, 0.8);
	}
	@media ${mobile} {
		padding: 10px 20px;
	}
`;

const PrimaryButton = styled(BaseButton)`
	background: var(--special);
	color: var(--text);
	border: 1px solid var(--special);
	:hover {
		background-color: #2e91a0;
	}
`;

const SecondaryButton = styled(BaseButton)`
	color: #35a6b6;
	border: 1px solid #35a6b6;
	:hover {
		background: rgba(0, 0, 0, 0.5);
	}
`;
const DarkButton = styled(BaseButton)`
	color: var(--text);
	background-color: #001b26;
	:hover {
		background-color: rgba(0, 0, 0, 0.5);
	}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'base' | 'primary' | 'secondary' | 'dark';
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'base', children, ...rest }) => {
	if (variant === 'primary') return <PrimaryButton {...rest}>{children}</PrimaryButton>;
	if (variant === 'secondary') return <SecondaryButton {...rest}>{children}</SecondaryButton>;
	if (variant === 'dark') return <DarkButton {...rest}>{children}</DarkButton>;
	return <BaseButton {...rest}>{children}</BaseButton>;
};

export default Button;
