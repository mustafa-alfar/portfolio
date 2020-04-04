import styled from '@emotion/styled';
import { flex } from '../style';
import { mediaQuery } from '../../utils';
import { css } from '@emotion/core';

export const Container = styled.header`
  ${flex};
  padding: 1em 15px;
  color: rgb(33, 33, 33);
  z-index: 21;
  background-color: white;
  margin: 0 auto;
  transition: 0.2s transform ease-in;

  ${({ isFixed }) =>
    isFixed &&
    css`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      background-color: #000;
      color: white;
      transform: translateY(-100%);
    `};

  nav.desktop {
    ${flex}
    li + li {
      margin-left: 1em;
    }
  }

  div.mobile {
    display: none;
  }

  a {
    color: inherit;
    cursor: pointer;
    outline: none;
    padding: 0.5em 0;
    transition: 0.2s border ease-in;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #333;
    }
  }

  ${mediaQuery[1]} {
    nav.desktop {
      display: none;
    }

    div.mobile {
      display: flex;
    }
  }
`;
