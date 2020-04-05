import styled from '@emotion/styled';
import { flex } from '../style';
import { mediaQuery } from '../../utils';
import { css } from '@emotion/core';

export const Container = styled.header`
  ${flex};
  color: rgb(33, 33, 33);
  z-index: 21;
  background-color: white;
  margin: 0 auto;
  transition: 0.2s transform ease-in;
  padding: 0 0 0 16px;

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
  }

  div.mobile {
    display: none;
  }

  a.basic-link {
    display: inline-block;
    color: inherit;
    cursor: pointer;
    outline: none;
    padding: 1.5em 1em;
    transition: 0.2s border ease-in;
    margin: 0;

    &:hover {
      background-color: #4353ff;
      color: white;
    }
  }

  ${mediaQuery[1]} {
    padding: 1em 32px;
    nav.desktop {
      display: none;
    }

    div.mobile {
      display: flex;
    }
  }
`;
