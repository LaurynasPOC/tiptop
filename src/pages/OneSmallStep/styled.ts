import styled from 'styled-components';
import { GridWrapper } from '@components/wrappers';
import { tablet } from '@styles/breakpoints';

interface Props {
  active: number;
}

export const IconRight = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid var(--lbg);
  margin-right: 20px;
`;

export const VideosSelect = styled(GridWrapper)<Props>`
  margin: 100px 0;
  & > div {
    &:first-child {
      button {
        min-width: 310px;
        display: flex;
        align-items: center;
        outline: none;
        appearance: none;
        padding: 30px;
        border: none;
        color: var(--text);
        font-size: 20px;
        background: none;
        border-radius: 20px;
        cursor: pointer;
        svg {
          margin-right: 20px;
        }
        ${({ active }) =>
          active &&
          `
                    &:nth-child(${active}) {
                        background: #35A6B633;
                    }
                `}
      }
    }
    &:last-child {
      img {
        width: 100%;
      }
    }
  }
  & > div:nth-of-type(2) {
    position: relative;
    padding: 150px;
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      visibility: hidden;
      height: 100%;
      width: 100%;
    }
    video:nth-of-type(${({ active }) => active}) {
      visibility: visible;
    }
    video:nth-of-type(2) {
      width: 120%;
      height: 120%;
    }
  }
  @media ${tablet} {
    margin: 40px 0;
    button {
      width: 100%;
    }
  }
`;
