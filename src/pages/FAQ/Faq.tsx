import React from "react";
import { FAQ } from "./Data";
import Accordion from "@components/Accordion";
import styled from "styled-components";
import { Container } from "@components/wrappers";

const FAQStyles = styled(Container)`
  margin: 120px auto 200px auto;
  h2 {
    text-align: center;
    margin-bottom: 80px;
  }
  @media (max-width: 768px) {
    margin: 50px 0;
    h3 {
      font-size: 32px;
      margin-bottom: 40px;
    }
    & > div > div > div:first-of-type {
      font-size: 16px;
    }
    & > div > div > div:nth-of-type(2) {
      font-size: 14px;
    }
  }
`;

const Faq = () => (
  <FAQStyles id="faq">
    <h2>Frequently Asked Questions</h2>
    <div>
      {FAQ.map(({ question, answer }) => (
        <Accordion title={question} content={answer} key={question} />
      ))}
    </div>
  </FAQStyles>
);

export default Faq;
