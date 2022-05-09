import styled from 'styled-components';

import { device } from 'framework/system/theme/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.SoftWhite};
`;

export const AuthContainer = styled.div`
  width: 30%;
  height: 50vh;

  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export const PrevenitLogo = styled.img`
  height: 30%;
`;
