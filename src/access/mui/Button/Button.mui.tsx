import React from 'react';
import { ButtonProps } from '@mui/material';

import * as S from './Button.style';

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return (<S.Button {...props}>{children}</S.Button>);
};

export { Button };
