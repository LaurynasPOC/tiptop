import React from 'react';
import { FAQ } from './Data';
import Accordion from '@components/Accordion';
import styled from 'styled-components';
import { Container, SectionWrapper } from '@components/wrappers';
import { tablet } from '@styles/breakpoints';

const FAQStyles = styled(SectionWrapper)`
  h3 {
    text-align: center;
    margin-bottom: 80px;
  }
  @media ${tablet} {
    margin: 50px 0;
    h3 {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
`;

const Faq = () => (
  <FAQStyles id="faq">
    <Container>
      <h3>Frequently Asked Questions</h3>
      <div>
        {FAQ.map(({ question, answer }) => (
          <Accordion title={question} content={answer} key={question} />
        ))}
      </div>
    </Container>
  </FAQStyles>
);

export default Faq;
