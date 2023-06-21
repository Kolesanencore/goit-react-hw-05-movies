import { Link, NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const LinkStyle = styled(Link)`
  margin-left: 8px;
  margin-top: 8px;
  margin-right: 8px;
  display: flex;
  margin-bottom: 8px;
  padding: 6px;
  align-items: center;
  font-weight: 700;
  justify-content: center;
  background-color: #e5a536;
  color: white;

  border-radius: 2px;

  :hover {
    box-shadow: 0 2px 8px rgba(255, 107, 1, 0),
      inset 0 1px hsla(0, 0%, 100%, 0.3), inset 0 10px hsla(0, 0%, 100%, 0.2),
      inset 0 10px 20px hsla(0, 0%, 100%, 0.25),
      inset 0 -15px 30px rgba(255, 107, 1, 0.3);
    text-transform: uppercase;
  }
`;

export const Detail = styled.p`
  margin-top: 28px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 14px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px;
  border-radius: 12px;
  font-size: 20px;
  color: #e5a536;
  font-weight: bold;
  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    transform: scale(1.02);
  }

  &.active {
    color: #ffffff;

    text-transform: uppercase;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.64);
    background: linear-gradient(135deg, #bf3989, #096bde);
    box-shadow: 0 2px 8px rgba(255, 107, 1, 0),
      inset 0 1px hsla(0, 0%, 100%, 0.3), inset 0 10px hsla(0, 0%, 100%, 0.2),
      inset 0 10px 20px hsla(0, 0%, 100%, 0.25),
      inset 0 -15px 30px rgba(255, 107, 1, 0.2);
  }
`;
