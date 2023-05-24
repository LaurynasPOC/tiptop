import React from 'react';
import { RoadmapData } from './Data';
import { Container } from '@components/wrappers';
import RoadmapMob from './RoadmapMob';
import { useQuery } from '@styles/breakpoints';
import { RoadmapStyles, RoadMapRedLine, Box } from './styled';

const Roadmap: React.FC = () => {
  const { isDesktop } = useQuery();
  return !isDesktop ? (
    <RoadmapStyles id="roadmap">
      <RoadMapRedLine />
      <Container>
        <h3>Our Running Track</h3>
      </Container>
      <Box>
        {RoadmapData.map(({ q, content, year }, i) => (
          <div key={i}>
            <div>
              {year}
              <span>Q{q}</span>
            </div>
            <ul>
              {content.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div>2025 +</div>
      </Box>
    </RoadmapStyles>
  ) : (
    <RoadmapMob />
  );
};

export default Roadmap;
