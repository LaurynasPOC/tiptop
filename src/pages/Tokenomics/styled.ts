import styled from 'styled-components';
import { SectionWrapper, GridWrapper } from '@components/wrappers';

interface Props {
  active: number;
  img: number;
}

export const TokenomicsWrap = styled(SectionWrapper)<Props>`
  padding: 80px 0;
  background: radial-gradient(38.48% 66.93% at 69.69% 60.46%, #35aaba 0%, #276975 100%);
  @media (max-width: 1024px) {
    background: #276975;
  }
  h2 {
    text-align: center;
    margin: 20px auto;
  }
  & > div > p {
    text-align: center;
  }
  p:nth-of-type(1) {
    margin-bottom: 12px;
  }
  p:nth-of-type(2) {
    margin-bottom: 80px;
  }
  ${GridWrapper} {
    & > div:first-child {
      & > div {
        padding: 20px 10px;
        cursor: pointer;
        border-bottom: 1px solid #35a6b680;
        &:hover {
          background: rgba(53, 166, 182, 0.27);
        }
        &:nth-child(${({ active }) => active + 1}) {
          background: var(--lbg);
        }
      }
    }
    & > div:last-child {
      position: relative;
    }
  }
  svg {
    width: 100%;
    height: auto;
    ${({ img }) => `
              rect:nth-child(n + ${img + 3}) {
                  fill: none;
              }
          `}
  }
  @media (max-width: 767px) {
    padding: 40px 0 60px;
  }
`;
export const TokenomicsTooltip = styled.div`
  padding: 30px;
  background: var(--lbg);
  position: absolute;
  top: 0;
  right: 0;
  max-width: 50%;
  background: rgba(53, 166, 182, 0.8);
  backdrop-filter: blur(3px);
  border-radius: 8px;
  b {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    padding-top: 12px;
  }
`;
