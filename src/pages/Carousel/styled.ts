import styled from 'styled-components';
import { SectionWrapper } from '@components/wrappers';
import { mobile, tablet, desktop } from '@styles/breakpoints';
import RedBgLine from '../../assets/photos/red-lines-bg.png';

interface Props {
  active: boolean;
}

export const CarouselStyles = styled(SectionWrapper)`
  position: relative;
  background-image: url(${RedBgLine});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: var(--lbg);
  @media ${mobile} {
    background-size: 100% 80%;
  }
  & > div:first-of-type {
    position: absolute;
    margin: -2px -40px 0;
    top: 0;
    z-index: 0;
    width: 110%;
    height: 1500px;
    background-color: var(--dbg);
    clip-path: polygon(0 0, 100% 0, 100% 27%, 0 5%);
    @media ${tablet} {
      clip-path: polygon(0 0, 100% 0, 100% 30%, 0 10%);
    }
  }
  & > div:last-of-type {
    position: relative;
    z-index: 1;
    max-width: 1500px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: var(--subbg);
    .carousel .control-dots {
      display: flex;
      margin-left: 100px;
      margin-bottom: 50px;
      & > div {
        cursor: pointer;
      }
    }
  }
`;

interface SlideProp {
  img: string;
}

export const Slide = styled.div<SlideProp>`
  text-align: left;
  @media ${!desktop} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    height: 700px;
    & > div:last-child {
      & > div {
        position: absolute;
        left: 0;
        bottom: 60px;
        padding: 20px;
        background: var(--lbg);
        max-width: 40%;
      }
      & > div > i {
        font-size: 20px;
        line-height: 30px;
      }
      & > div > p {
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-top: 24px;
      }
    }
  }
  & > div:last-child {
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    @media ${desktop} {
      border-bottom-right-radius: 0;
      border-top-left-radius: 20px;
    }
  }
  & > div:first-child {
    padding: 80px;
    h3 {
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 48px;
      font-weight: 600;
    }
    button {
      margin-top: 80px;
    }
  }
  @media ${desktop} {
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    height: 100%;
    & > div:first-child {
      padding: 0 20px 100px;
      h3 {
        font-size: 24px;
      }
      button {
        margin-top: 40px;
      }
    }
    & > div:last-child {
      height: 300px;
      & > div {
        display: none;
      }
    }
  }
`;

export const SliderIndicator = styled.div<Props>`
  display: flex;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 13.5px solid var(--lbg);
  margin-right: 15px;
  opacity: ${({ active }) => !active && '0.4'};
`;

export const SliderPrev = styled.div<Props>`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid var(--lbg);
  bottom: 60px;
  right: 120px;
  opacity: ${({ active }) => !active && '0.4'};
`;

export const SliderNext = styled.div<Props>`
  cursor: pointer;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid var(--lbg);
  bottom: 60px;
  right: 60px;
  opacity: ${({ active }) => !active && '0.4'};
`;
