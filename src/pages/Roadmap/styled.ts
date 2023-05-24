import styled from 'styled-components';
import RoadmapImg from '@assets/photos/roadmap.webp';
import { ReactComponent as RedLine } from '@assets/svg/roadmap-red-line.svg';

export const RoadmapStyles = styled.section`
  position: relative;
  width: 100%;
  height: 2163px;
  background-image: url(${RoadmapImg});
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: auto 100%;
  h3 {
    margin: 40px 60px;
    width: 350px;
  }
`;

export const RoadMapRedLine = styled(RedLine)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60.8%, -50%);
  margin-top: 141px;
  path {
    filter: drop-shadow(0 0 15px red);
    stroke-dasharray: 6600; /* Set the length of the path */
    stroke-dashoffset: 6600; /* Hide the path initially */
    animation: fillPath 16s linear forwards infinite;
  }
  @keyframes fillPath {
    from {
      stroke-dashoffset: 6600;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const Box = styled.div`
  & > div {
    position: absolute;
    background-color: rgba(0, 27, 38, 0.8);
    padding: 20px 20px 20px 40px;
    border-radius: 8px;
  }
  & > div:nth-child(1) {
    top: 23%;
    left: 50%;
    transform: translate(-183%, -50%);
  }
  & > div:nth-child(2) {
    top: 13.8%;
    left: 50%;
    transform: translate(-33%, -50%);
  }
  & > div:nth-child(3) {
    top: 20.5%;
    left: 50%;
    transform: translate(83%, -50%);
  }
  & > div:nth-child(4) {
    top: 37%;
    left: 50%;
    transform: translate(-19%, -50%);
  }
  & > div:nth-child(5) {
    top: 51%;
    left: 50%;
    transform: translate(34%, -50%);
  }
  & > div:nth-child(6) {
    top: 71%;
    left: 50%;
    transform: translate(44%, -50%);
  }
  & > div:nth-child(7) {
    top: 58%;
    left: 50%;
    transform: translate(-103%, -50%);
  }
  & > div:nth-child(8) {
    top: 59%;
    left: 50%;
    transform: translate(-282%, -50%);
  }
  & > div:nth-child(9) {
    top: 77%;
    left: 50%;
    transform: translate(-265%, -50%);
  }
  & > div:nth-child(10) {
    top: 90%;
    left: 50%;
    transform: translate(-510%, -50%);
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    padding: 20px 30px;
  }
  & > div > div:first-of-type {
    margin-bottom: 10px;
    font-weight: 600;
    & > span {
      margin-left: 10px;
    }
  }
  & > div > ul {
    line-height: 1.7;
  }
`;
