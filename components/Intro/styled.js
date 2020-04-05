import styled from '@emotion/styled';
import { flex } from '../style';

export const Container = styled.main`
  ${flex};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 65vh;
  min-height: 520px;
  background-color: #d8ece8;
  background-image: url(https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d48057e3a861da4768ce8af_color3.jpg)
  background-position: 0 0;
  background-size: cover;

  h1 {
    font-size: 3.6rem;
    color: #333;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 300;
  }

`;
