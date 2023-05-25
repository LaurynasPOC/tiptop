import styled from 'styled-components';
import HeroBg from '@assets/photos/hero_bg.png';
import { SectionWrapper, GridWrapper } from '@components/wrappers';
import { ReactComponent as Triangle } from '@assets/svg/section_triangle.svg';

export const SectionTriangle = styled(Triangle)`
  position: absolute;
  top: 0;
  left: 0;
  height: 380px;
  z-index: -1;
  @media (max-width: 1740px) {
    height: 240px;
    width: auto;
  }
  @media (max-width: 1600px) {
    height: 160px;
  }
`;

export const ContactBgWrap = styled(SectionWrapper)`
  padding-top: 30px;
  background-image: url(${HeroBg});
  background-size: auto 100%;
  background-position: right center;
  background-repeat: no-repeat;
`;

export const ContactFormWrap = styled(GridWrapper)`
  form {
    & > div {
      margin-bottom: 20px;
    }
    button {
      margin: 0 auto;
      display: block;
    }
  }
  & > div {
    &:first-child {
      p {
        padding-bottom: 30px;
      }
    }
  }
  button {
    width: 100%;
  }
`;
