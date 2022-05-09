import styled from 'styled-components';

export const LoadingSpinnerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #00000059;
  display: flex;
  align-items: center;
`;

export const LoadingSpinner = styled.div`
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  top: 45%;
`;
