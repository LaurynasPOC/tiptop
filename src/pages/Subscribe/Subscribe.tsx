import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Container } from '@components/wrappers';
import SubscribeForm from '@components/SubscribeForm';
import { post } from '@utils/api';
import { smDesktop } from '@styles/breakpoints';

const SubscribeStyles = styled.div`
  margin: 0 20px;
  & > div {
    background-color: #19323c;
    text-align: center;
    padding: 80px 30px;
    border-radius: 20px;
    box-shadow: 0px 20px 40px rgba(0, 7, 10, 0.21);
    @media ${smDesktop} {
      padding: 40px 20px;
    }
    h3 {
      @media ${smDesktop} {
        font-size: 32px;
      }
    }
    p {
      margin: 10px auto;
      max-width: 920px;
      font-size: 24px;
      font-weight: 300;
      margin-bottom: 60px;
      line-height: 36px;
      color: var(--subtext);
      @media ${smDesktop} {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 20px;
      }
    }
  }
`;
interface PostResponse {
  success?: boolean;
}

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result: PostResponse = await post('subscribe', { email });
    if (result?.success) {
      setResponse('Subscribed successful!');
      setEmail('');
      setTimeout(() => {
        setResponse('');
      }, 6000);
    } else {
      setEmail('');
      setResponse('Failed to subscribe');
    }
  };

  return (
    <SubscribeStyles>
      <Container id="subscribe">
        <h3>Subscribe to TipTop Newsletter</h3>
        <p>Join our growing community of fitness junkies and crypto enthusiasts!</p>
        <SubscribeForm
          response={response}
          email={email}
          setEmail={setEmail}
          checkbox
          buttonText={'Subscribe'}
          onSubmit={onSubmit}
        />
      </Container>
    </SubscribeStyles>
  );
};

export default Subscribe;
