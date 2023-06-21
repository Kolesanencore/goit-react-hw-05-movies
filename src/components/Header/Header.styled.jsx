import styled from '@emotion/styled';

export const NavWrap = styled.nav`
  background: linear-gradient(135deg, #bf3989, #096bde);
  box-shadow: 0 2px 8px rgba(255, 107, 1, 0), inset 0 1px hsla(0, 0%, 100%, 0.3),
    inset 0 10px hsla(0, 0%, 100%, 0.2),
    inset 0 10px 20px hsla(0, 0%, 100%, 0.25),
    inset 0 -15px 30px rgba(255, 107, 1, 0.3);
  color: #fff;

  padding: 12px 24px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const NavItem = styled.li``;

export const Link = styled.a`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    transform: scale(1.02);
  }

  &.active {
    text-transform: uppercase;
    text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
      -1px 1px 0 black; /* Обводка черным цветом */
  }
`;
