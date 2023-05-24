import React, { useState } from 'react';
import RoadmapImg from '@assets/photos/roadmap-mob.webp';
import { Container, Box, GridWrapper } from '@components/wrappers';
import styled from 'styled-components';
import { RoadmapData } from './Data';

interface Props {
  active: number;
}

const RoadmapCard = styled(GridWrapper)`
  width: 100%;
  padding: 20px;
  * {
    margin: 5px;
  }
  span {
    font-weight: 600;
  }
  & > div {
    padding: 5px 30px;
    font-weight: 600;
  }
  position: absolute;
  overflow: hidden;
  transition: all 0.7s ease-in;
  :nth-child(1) {
    top: 190px;
    left: ${({ active }) => (active === 1 ? '0' : active === 2 ? '-100%' : '-200%')};
  }
  :nth-child(2) {
    top: 190px;
    left: ${({ active }) => (active === 2 ? '0' : active === 3 ? '-100%' : '100%')};
  }
  :nth-child(3) {
    top: 190px;
    left: ${({ active }) => (active === 3 ? '0' : active === 2 ? '100%' : '200%')};
  }
`;

const RoadmapWrap = styled.section`
  height: 1000px;
  background-image: url(${RoadmapImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  h3 {
    margin: 40px 0;
  }
`;

const ButtonStyles = styled(Box)<Props>`
  button {
    border: 0;
    background: none;
    border-radius: 0;
    padding: 10px 20px 10px 10px;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    opacity: 0.5;
    color: var(--text);
    :nth-child(${({ active }) => active}) {
      opacity: 1;
    }
  }
`;

const RoadmapMob: React.FC = () => {
  const [active, setActive] = useState<number>(1);

  const handleMapData = (a: number, b: number) => {
    const result = (
      <>
        {RoadmapData.slice(a, b).map(({ q, content }, i) => (
          <Box key={i}>
            <span>Q{q}</span>
            <ul>
              {content.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Box>
        ))}
      </>
    );
    return result;
  };

  return (
    <RoadmapWrap id="roadmap">
      <Container>
        <h3>Roadmap</h3>
        <ButtonStyles active={active}>
          <button onClick={() => setActive(1)}>2022</button>
          <button onClick={() => setActive(2)}>2023</button>
          <button onClick={() => setActive(3)}>2024</button>
        </ButtonStyles>
        <Box>
          <RoadmapCard colXl={2} colL={1} active={active}>
            {handleMapData(0, 1)}
          </RoadmapCard>
          <RoadmapCard colXl={2} colL={1} active={active} gap="0">
            {handleMapData(1, 5)}
          </RoadmapCard>
          <RoadmapCard colXl={2} colL={1} active={active} gap="0">
            {handleMapData(5, 9)}
          </RoadmapCard>
        </Box>
      </Container>
    </RoadmapWrap>
  );
};
export default RoadmapMob;
