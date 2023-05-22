import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { Container, GridWrapper, FlexWrapper, SectionWrapper } from '@components/wrappers'
import Accordion from '@components/Accordion'
import { Options, Data } from './Data'
import { ReactComponent as ShoeImage } from '@assets/svg/tokenomics_shoe.svg'
import { useQuery } from '@styles/breakpoints'

interface Props {
  active: number;
  img: number;
}

const TokenomicsWrap = styled(SectionWrapper)<Props>`
	padding: 80px 0;
	background: radial-gradient(38.48% 66.93% at 69.69% 60.46%, #35aaba 0%, #276975 100%);
	@media (max-width: 1024px) {
		background: #276975;
	}
	h2 {
		text-align: center;
		margin: 20px auto;
	}
	& > div > p {
		text-align: center;
	}
	p:nth-of-type(1) {
		margin-bottom: 12px;
	}
	p:nth-of-type(2) {
		margin-bottom: 80px;
	}
	${GridWrapper} {
		& > div:first-child {
			& > div {
				padding: 20px 10px;
				cursor: pointer;
				border-bottom: 1px solid #35a6b680;
				&:hover {
					background: rgba(53, 166, 182, 0.27);
				}
				&:nth-child(${({ active }) => active + 1}) {
					background: var(--lbg);
				}
			}
		}
		& > div:last-child {
			position: relative;
		}
	}
	svg {
		width: 100%;
		height: auto;
		${({ img }) => `
            rect:nth-child(n + ${img + 3}) {
                fill: none;
            }
        `}
	}
	@media (max-width: 767px) {
		padding: 40px 0 60px;
	}
`;
 const TokenomicsTooltip = styled.div`
	padding: 30px;
	background: var(--lbg);
	position: absolute;
	top: 0;
	right: 0;
	max-width: 50%;
	background: rgba(53, 166, 182, 0.8);
	backdrop-filter: blur(3px);
	border-radius: 8px;
	b {
		font-size: 16px;
		font-weight: 600;
	}
	p {
		font-size: 16px;
		font-weight: 400;
		padding-top: 12px;
	}
`;



const Tokenomics = () => {
    const [active, setActive] = useState(0)
    const [img, setImg] = useState(0)
    const [intervalStopped, setIntervalStopped] = useState(false)
    const { isSmDesktop } = useQuery()

    useEffect(() => {
        if (intervalStopped) return
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
                            {Options.map((i, idx) =>
                                <FlexWrapper
                                    justifyContent="space-between"
                                    onClick={() => {
                                        setActive(idx)
                                        setIntervalStopped(true)
                                        setImg(idx)
                                    }}
                                    key={i.title}
                                >
                                    <b>{i.title}</b><span>{i.amount} ({i.percentage}%)</span>
                                </FlexWrapper>
                            )}
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
    )
}

export default Tokenomics

