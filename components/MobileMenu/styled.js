import styled from '@emotion/styled';

export const Container = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  top: 67px;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ isOpen }) =>
    isOpen ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)'};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in, background 0.3s ease-in;
`;

export const Menu = styled.ul`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 0;
  padding: 0;

  li {
    cursor: pointer;
    a {
      padding: 1em;
      padding-right: 0;
      width: 100%;
      display: inline-block;
      transition: 0.2s border ease-in;
      border-bottom: 2px solid transparent;
      &:hover {
        background-color: #4353ff;
        color: white;
      }
    }
  }
`;
