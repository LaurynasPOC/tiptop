import styled from 'styled-components';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { HashLink } from 'react-router-hash-link';
import { Container, FlexWrapper, TextBase } from '@components/wrappers';
import { SimpleLink } from '@components/links';
import { ReactComponent as AppStore } from '@assets/app_store.svg';
import { ReactComponent as GooglePlay } from '@assets/google_play.svg';
import { ReactComponent as AppInstaller } from '@assets/app_installer.svg';
import { socialMediaLinks, linkData } from './Data';
import { NavbarData } from '@components/navigation/NavbarData';

const FooterWrap = styled.footer``;

const Footer = () => {
  return (
    <FooterWrap>
      <Container id="community">
        <FlexWrapper justifyContent={'space-between'}>
          <FlexWrapper>
            <Logo />
            <TextBase>
              TipTop is a move-to-earn app that gamifies fitness to promote active lifestyle and
              financial independence.
            </TextBase>
            <FlexWrapper justifyContent="space-between">
              <SimpleLink href={'https://play.google.com/store/apps/details?id=com.tiptop.io'}>
                <GooglePlay />
              </SimpleLink>
              <SimpleLink href={'https://tiptop.io/app.apk'}>
                <AppInstaller />
              </SimpleLink>
              <SimpleLink href="https://apps.apple.com/app/tiptop-sneakers/id6444293849">
                <AppStore />
              </SimpleLink>
              {/* <SimpleLink href={'https://apple.com'}><img width={'150px'} src={AppStore} alt='download TipTop' loading="lazy" /></SimpleLink> */}
            </FlexWrapper>
          </FlexWrapper>
          <div>
            <p>TipTop</p>
            {NavbarData.map(({ to, text }) => (
              <HashLink key={to} to={to}>
                {text}
              </HashLink>
            ))}
          </div>
          <div>
            <div>
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
            </div>
          </div>
          <div>
            <p>Our Community</p>
            <FlexWrapper>
              {socialMediaLinks.map(({ svg: SvgIcon, href }) => (
                <SimpleLink key={href} href={href}>
                  <SvgIcon />
                </SimpleLink>
              ))}
            </FlexWrapper>
            <FlexWrapper justifyContent={window.innerWidth < 1024 ? 'center' : 'space-between'}>
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
