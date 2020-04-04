import styled from '@emotion/styled';

import { flex } from '../style';
import { mediaQuery } from '../../utils';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-itesm: center;
  margin-top: 10em;
  padding: 0 64px;
`;

export const Layout = styled.nav`
  ${flex};
  margin: 0 auto;
  width: 100%;
  padding: 0;

  img {
    width: 30px;
    height: 30px;
  }

  ul {
    padding: 0;
    ${flex};
    li + li {
      margin-left: 1em;
    }
  }

  ${mediaQuery[1]} {
    flex-direction: column;
  }
`;
