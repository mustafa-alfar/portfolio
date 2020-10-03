import styled from '@emotion/styled';
import { mediaQuery } from '../../utils';
import { Element } from 'react-scroll';

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
      box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 6px 0px;
      background-color: #fff;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px 0px;
      }

      > a {
        display: block !important;
        padding: 2em 32px !important;
      }
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

      .github {
        img {
          &:hover {
            transform: scale(1.1);
          }
        }
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
      margin: 0 32px;
    }
    a {
      display: inline-block !important;
    }
  }
`;
