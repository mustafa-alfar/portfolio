import styled from '@emotion/styled';
import { flex } from '../style';

export const Container = styled.div`
  ${flex};
  flex-direction: column;
  cursor: pointer;
  div {
    width: 30px;
    height: 3px;
    background-color: #333;
    margin-bottom: 5px;
    transform-origin: 3px;
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;

    :nth-of-type(1n) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2n) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3n) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
