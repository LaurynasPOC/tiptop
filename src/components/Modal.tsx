import React, { useEffect, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { SimpleLink } from './links';
import { ReactComponent as IconPlus } from '@assets/svg/plus.svg';
import { Box, FlexWrapper } from './wrappers';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  closeModal?: () => void;
}

interface Props {
    isOpen: boolean
}

const ModalStyles = styled.div<Props>`
	position: fixed;
	z-index: 10;
	left: 50%;
	top: 50vh;
	transform: translate(-50%, -50%);
	width: 364px;
	height: 400px;
	margin: 0 auto;
	text-align: center;
	background: #35a6b6;
	box-shadow: 0px 20px 40px rgba(0, 7, 10, 0.21);
	border-radius: 20px;
	padding-bottom: 40px;
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

	.x {
		transform: rotate(45deg);
		cursor: pointer;
	}
	& > div:first-of-type {
		width: 100%;
		text-align: end;
	}
	img:first-of-type {
		margin-bottom: 10px;
	}
`;


const Modal:React.FC<ModalProps> = ({ isOpen, setIsOpen, closeModal, children, ...rest }): React.ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, modalRef, setIsOpen]);

  return (
    <ModalStyles isOpen={isOpen} ref={modalRef} {...rest}>
      <Box
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        padding='10px'>
        <IconPlus className='x' />
      </Box>
      {children}
    </ModalStyles>
  );
};

export default Modal;

