import styled from '@emotion/styled';

import { css } from '@emotion/react';

const afterElementStyles = css`
  content: '';
  display: block;
`;

export const Item = styled.li`
  &:not(:last-child)::after {
    ${afterElementStyles}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  color: #ff857f;
`;

export const Content = styled.p`
  color: #000000;
`;
