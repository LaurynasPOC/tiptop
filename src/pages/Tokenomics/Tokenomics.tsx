import React, { useState, useEffect } from 'react';
import { Container, GridWrapper, FlexWrapper } from '@components/wrappers';
import Accordion from '@components/Accordion';
import { ReactComponent as ShoeImage } from '@assets/svg/tokenomics_shoe.svg';
import { useQuery } from '@styles/breakpoints';
import { TokenomicsWrap, TokenomicsTooltip } from './styled';
import { Options, Data } from './Data';

const Tokenomics = () => {
  const [active, setActive] = useState(0);
  const [img, setImg] = useState(0);
  const [intervalStopped, setIntervalStopped] = useState(false);
  const { isSmDesktop } = useQuery();

  useEffect(() => {
    if (intervalStopped) return;
    const interval = setInterval(() => {
      if (img === 9) {
        setImg(0);
      } else {
        setImg(img + 1);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [img, intervalStopped]);

  return (
    <TokenomicsWrap img={img} active={active} id="tokenomics">
      <Container>
        <h2>$TOP Tokenomics</h2>
        <p>Generation Event: Feb 15th, 2023</p>
        <p>Total supply: 3,000,000,000 (100%)</p>
        {!isSmDesktop ? (
          <GridWrapper col={2}>
            <div>
              {Options.map((i, idx) => (
                <FlexWrapper
                  justifyContent="space-between"
                  onClick={() => {
                    setActive(idx);
                    setIntervalStopped(true);
                    setImg(idx);
                  }}
                  key={i.title}
                >
                  <b>{i.title}</b>
                  <span>
                    {i.amount} ({i.percentage}%)
                  </span>
                </FlexWrapper>
              ))}
            </div>
            <div>
              <ShoeImage />
              <TokenomicsTooltip>
                <b>{Data[active].header}</b>
                <p>{Data[active].content}</p>
              </TokenomicsTooltip>
            </div>
          </GridWrapper>
        ) : (
          <div>
            {Options.map((item, idx) => (
              <Accordion key={item.title} title={`${item.title}  -  ${item.percentage}%`}>
                <div>
                  <b>{Data[idx].header}</b>
                  <p>{Data[idx].content}</p>
                </div>
              </Accordion>
            ))}
          </div>
        )}
      </Container>
    </TokenomicsWrap>
  );
};

export default Tokenomics;
