import React from 'react';
import { Puff } from 'react-loader-spinner';

import * as S from './LoadSpinner.style';

const LoadSpinner: React.FC = () => (
  <S.LoadingSpinnerContainer>
    <S.LoadingSpinner>
      <Puff color="#00BFFF" height={100} width={100} />
    </S.LoadingSpinner>
  </S.LoadingSpinnerContainer>
);

export { LoadSpinner };
export default LoadSpinner;
