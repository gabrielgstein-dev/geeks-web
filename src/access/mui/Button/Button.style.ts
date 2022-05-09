import styled from 'styled-components';

import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)`
  && {
    background-color: ${({ theme }) => theme.colors.GeeksBlue};
  }
`;
