import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css``}
`;
export const Authbox = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const FormGroup = styled.div`
  ${() => css`
    padding: 5px;
  `}
`;

export const Label = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    font-size: ${theme.fontSize.Lg};
    font-weight: bold;
    color: ${theme.colors.SoftBlack};

    padding: 5px;
  `}
`;
