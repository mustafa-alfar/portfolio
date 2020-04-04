import styled from '@emotion/styled';
import { mediaQuery } from '../../utils';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

export const Container = styled(Element)`
  padding: 0;
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1.5em;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2em 32px;
      box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 6px 0px;
      background-color: #fff;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px 0px;
      }
      // &:nth-child(1n) {
      //   background-image: url(https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d48ada4d6bb3ed7f8a2b7d8_color-b1.jpg);
      // }
      // &:nth-child(2n) {
      //   background-image: url(https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d48ada48f3da11f69aaa3cc_color-b2.jpg);
      // }
      // &:nth-child(3n) {
      //   background-image: url(https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d48ada5d6bb3e07bfa2b7d9_color-b3.jpg);
      // }
      > * {
        margin: 0 0 10px 0;
      }

      h2 {
        font-weight: 500;
      }
      p {
        font-weight: 300;
      }
      a {
        display: contents;
        margin-bottom: 0;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  ${mediaQuery[1]} {
    text-align: center;
    li {
      margin: 0 64px;
    }
    a {
      display: inline-block !important;
    }
  }
`;
