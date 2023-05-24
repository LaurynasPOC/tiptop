import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMedium } from '@utils/api';
import { SectionWrapper, Container, Box } from '@components/wrappers';
import { Card } from './Items';

interface MediumPost {
  pubDate: string;
  title: string;
  thumbnail: string;
  description: string;
}

const BlogPost = () => {
  const [items, setItems] = useState<MediumPost[]>([]);
  console.log(items);
  const path = window.location.pathname.split('/');
  const regex = /[?!_'—,’-\s]/g;
  const title = path[2].replaceAll(regex, '');
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    getMedium().then(resp => setItems(resp.items));
  }, []);

  const blogPost = items.find(i => i.title.replaceAll(regex, '') === title);
  console.log(title);
  console.log(blogPost);
  const date = blogPost?.pubDate ? new Date(blogPost.pubDate) : new Date();
  const dateFormatted = date.toLocaleDateString('en-US', options);

  return (
    <SectionWrapper>
      <Container>
        <Box maxWidth="900px" margin="100px auto 40px">
          <Card style={{ cursor: 'default' }}>
            <Box margin="20px 0 30px">
              <Box>{dateFormatted}</Box>
              <h3>{blogPost?.title.replaceAll('&amp;', 'and')}</h3>
            </Box>
            <img width={'100%'} src={blogPost?.thumbnail} alt="Nft utility" />
            <PInnerData dangerouslySetInnerHTML={{ __html: blogPost?.description || '' }} />
          </Card>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default BlogPost;

const PInnerData = styled.p`
  figure {
    img {
      display: none;
    }
  }
  img {
    margin-bottom: 30px;
  }
  ul,
  ol {
    margin: 20px 0;
    li {
      margin-left: 20px;
    }
  }
  h3 {
    margin: 40px 0 20px;
  }
  h5 {
    font-size: 40px;
    margin: 20px 0;
  }
  a {
    color: var(--lbg);
  }
  a:hover {
    border-bottom: 2px solid var(--lbg);
  }
  p {
    line-height: 1.6;
  }
  strong {
    margin: 30px 0;
  }
`;
