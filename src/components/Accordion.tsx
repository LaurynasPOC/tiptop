import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconPlus } from '@assets/svg/plus.svg';

interface AccordionProps {
  title: string;
  content?: string;
  children?: ReactNode;
}

interface AccordionWrapProps {
  open?: boolean;
}

const AccordionWrap = styled.div<AccordionWrapProps>`
  & > div {
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--text);
      padding: 20px 0;
      font-weight: 400;
      font-size: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;
      svg {
        width: 15px;
        min-width: 15px;
        transition: 0.3s all;
        fill: #d7d0c6;
      }
      ${({ open }) =>
        open
          ? `
                color:#35A6B6;
                border-bottom: none;
                svg {
                    transform: rotate(135deg);
                    path {
                        fill:#35A6B6;
                    }
                }
            `
          : ''}
    }
    &:last-child {
      transition: all 0.3s;
      color: var(--subtext);
      font-size: 14px;
      line-height: 24px;
      ${({ open }) =>
        open
          ? `
                max-height: 500px;
                opacity: 1;
                padding: 10px 20px 20px 0;
                border-bottom: 1px solid rgba(255,255,255, 0.2);
            `
          : `
                max-height: 0;
                overflow: hidden;
                opacity: 0;
            `}
    }
  }
`;

const Accordion: React.FC<AccordionProps> = ({ title, content, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AccordionWrap open={open}>
      <div onClick={() => setOpen(!open)}>
        {title} <IconPlus fill="black" />
      </div>
      <div>{content || children}</div>
    </AccordionWrap>
  );
};

export default Accordion;
