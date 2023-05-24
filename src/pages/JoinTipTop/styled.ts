import styled from 'styled-components';
import { GridWrapper } from '@components/wrappers';

export const InfoStyles = styled(GridWrapper)`
  margin: 40px 0;
  span {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    height: 60px;
    width: 60px;
    border-radius: 100%;
  }
  h6 {
    font-size: 20px;
  }
`;
