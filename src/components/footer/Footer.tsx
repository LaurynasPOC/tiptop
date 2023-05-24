import styled from 'styled-components';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';
import { HashLink } from 'react-router-hash-link';
import { Container, FlexWrapper, GridWrapper, TextBase } from '@components/wrappers';
import { SimpleLink } from '@components/links';
import { ReactComponent as AppStore } from '@assets/svg/app_store.svg';
import { ReactComponent as GooglePlay } from '@assets/svg/google_play.svg';
import { ReactComponent as AppInstaller } from '@assets/svg/apk.svg';
import { socialMediaLinks, linkData } from './Data';
import { NavbarData } from '@components/navigation/NavbarData';
import { mobile, smDesktop } from '@styles/breakpoints';

const FooterWrap = styled.footer`
  padding: 100px 0;
  & > div > div {
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    & > div:first-of-type {
      width: 35%;
      justify-content: space-between;
      & > p {
        margin-top: 20px;
        font-size: 16px;
        max-width: 300px;
      }
      & > div > a > svg {
        width: 130px;
        @media ${mobile} {
          width: 100px;
        }
      }
      @media ${smDesktop} {
        width: 100%;
        align-items: center;
        & > p {
          margin: 30px 0;
        }
      }
      @media ${mobile} {
        & > svg {
          width: 130px;
        }
      }
    }
    & > div:nth-last-of-type(2),
    div:nth-last-of-type(3) {
      & > a {
        color: var(--lbg);
        margin: 5px 0;
        font-size: 16px;
        :first-of-type {
          margin-top: 15px;
        }
      }
      @media ${smDesktop} {
        margin: 40px 0;
        width: 50%;
        text-align: center;
      }
    }
    & > div:last-of-type {
      max-width: 200px;
      & > p {
        margin-bottom: 15px;
        :last-of-type {
          font-size: 14px;
        }
      }
      & > div:last-of-type {
        margin-top: 30px;
        a {
          color: var(--lbg);
          margin-bottom: 20px;
          @media ${smDesktop} {
            text-align: center;
            margin: 0 auto;
          }
        }
      }
      @media ${smDesktop} {
        text-align: center;
        margin: 0 auto;
        max-width: 100%;
        p {
          margin: 20px 0;
        }
      }
    }
  }
  @media ${smDesktop} {
    padding: 40px 0;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Container id="community">
        <FlexWrapper justifyContent={'space-between'}>
          <FlexWrapper flexDirection="column">
            <Logo />
            <TextBase>
              TipTop is a move-to-earn app that gamifies fitness to promote active lifestyle and
              financial independence.
            </TextBase>
            <FlexWrapper gap="10px" justifyContent="space-between">
              <SimpleLink href={'https://play.google.com/store/apps/details?id=com.tiptop.io'}>
                <GooglePlay />
              </SimpleLink>
              <SimpleLink href={'https://tiptop.io/app.apk'}>
                <AppInstaller />
              </SimpleLink>
              <SimpleLink href="https://apps.apple.com/app/tiptop-sneakers/id6444293849">
                <AppStore />
              </SimpleLink>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper flexDirection="column">
            <p>TipTop</p>
            {NavbarData.map(({ to, text }) => (
              <HashLink key={to} to={to}>
                {text}
              </HashLink>
            ))}
          </FlexWrapper>
          <FlexWrapper flexDirection="column">
            <p>Application</p>
            {linkData.map(({ type, href, children }) => (
              <>
                {type === 'SimpleLink' ? (
                  <SimpleLink key={href} href={href}>
                    {children}
                  </SimpleLink>
                ) : (
                  <HashLink key={href} to={href}>
                    {children}
                  </HashLink>
                )}
              </>
            ))}
          </FlexWrapper>
          <div>
            <p>Our Community</p>
            <GridWrapper gap="10px" col={3} colL={9} colSm={3}>
              {socialMediaLinks.map(({ svg: SvgIcon, href }) => (
                <SimpleLink key={href} href={href}>
                  <SvgIcon width="40px" />
                </SimpleLink>
              ))}
            </GridWrapper>
            <FlexWrapper>
              <SimpleLink href={'/privacy'}>Privacy Policy</SimpleLink>
              <HashLink to={'/privacy/#disclaimer'}>Liability Disclaimer</HashLink>
            </FlexWrapper>
            <p>Copyright © {new Date().getFullYear()} TipTop Sneakers</p>
          </div>
        </FlexWrapper>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
