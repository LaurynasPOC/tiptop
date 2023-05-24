import React from 'react';
import styled from 'styled-components';
import { GridWrapper, Box } from '@components/wrappers';
import { Link } from 'react-router-dom';

export const Card = styled.article`
  cursor: pointer;
  margin: 30px 0 40px;
  padding: 20px;
  transition: all 500ms;
  border-radius: 8px;
  :hover {
    box-shadow: 0 0 30px 5px rgba(53, 166, 182, 0.6);
  }
`;

export interface Item {
  title: string;
  pubDate: string;
  description: string;
  thumbnail: string;
}

interface Props {
  currentItems: Item[];
}

const Items: React.FC<Props> = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map(({ title, pubDate, description, thumbnail }) => {
          const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };
          const regex = /[?!_’—,'-\s]/g;
          const des = description
            .split('<p>')[2]
            .replaceAll('</p>', '')
            .slice(0, 160)
            .concat(' . . .');
          const titleLink = title.replaceAll(regex, '');
          const date = new Date(pubDate);
          const dateFormatted = date.toLocaleDateString('en-US', options);
          return (
            <Card key={pubDate}>
              <Link to={`/blog/${titleLink}`}>
                <GridWrapper colExact={'2fr 1fr'} colSm={1}>
                  <Box>
                    <Box margin="0 0 10px 0">{dateFormatted}</Box>
                    <h5 style={{ marginBottom: '10px' }}>{title.replaceAll('&amp;', 'and')}</h5>
                    <p dangerouslySetInnerHTML={{ __html: des }} />
                  </Box>
                  <Box>
                    <img width="100%" src={thumbnail} alt="tiptop blog" loading="lazy" />
                  </Box>
                </GridWrapper>
              </Link>
            </Card>
          );
        })}
    </>
  );
};

export default Items;
