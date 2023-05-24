import styled from 'styled-components';
import { SectionWrapper, Box } from '@components/wrappers';
import { mobile, desktop, smDesktop } from '@styles/breakpoints';
import RedBgLine from '../../assets/photos/red-lines-bg.png';
import ContainerBg from '../../assets/photos/container-bg.jpg';

export const EveryStepStyles = styled(SectionWrapper)`
  padding: 0 20px;
  background-image: url(${RedBgLine});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media ${smDesktop} {
    padding-top: 100px;
  }
  @media ${mobile} {
    background-size: 100% 50%;
  }
  & > div {
    padding: 40px 0;
    background-image: url(${ContainerBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 20px;
    margin-top: 20px;
    @media ${desktop} {
      padding: 0;
    }
  }
`;

export const ImgBox = styled(Box)`
  height: 120px;
  width: 120px;
  border-radius: 20px;
  background: #001b2620;
  display: flex;
  align-items: center;
  justify-content: center;
`;
