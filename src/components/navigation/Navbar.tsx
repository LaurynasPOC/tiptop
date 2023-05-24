import React from 'react';
import { Box } from '@components/wrappers';
import { NavbarData } from './NavbarData';
import styled from 'styled-components';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';
import { HashLink, SimpleLink } from '../links';
import MobNavbar from './MobNavbar';
import { useQuery } from '@styles/breakpoints';
import Button from '@components/Button';

export const NavbarStyles = styled.nav`
  width: 100%;
  padding: 15px 20px;
  position: fixed;
  z-index: 99;
  display: flex;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  & > a > svg {
    width: 140px;
  }
  & > div:first-of-type > a {
    font-size: 16px;
    font-weight: 600;
    margin-left: 35px;
    :hover {
      border-bottom: 3px solid var(--lbg);
    }
    @media (max-width: 1400px) {
      margin-left: 15px;
    }
  }
  & > div:last-of-type > a {
    margin-left: 15px;
  }
`;

const Navbar: React.FC = () => {
  const { isDesktop } = useQuery();
  return !isDesktop ? (
    <NavbarStyles>
      <HashLink to="/">
        <Logo />
      </HashLink>
      <Box>
        {NavbarData.map(({ to, text }) => (
          <HashLink key={text} to={to}>
            {text}
          </HashLink>
        ))}
      </Box>
      <Box>
        <SimpleLink href="https://m.tiptop.io/">
          <Button variant="primary">Marketplace</Button>
        </SimpleLink>
        <HashLink to="/reps">
          <Button>Representatives</Button>
        </HashLink>
      </Box>
    </NavbarStyles>
  ) : (
    <MobNavbar />
  );
};

export default Navbar;
