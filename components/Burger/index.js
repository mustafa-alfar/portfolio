import React from 'react';

import { Container } from './styled';

const Index = ({ isOpen, setOpen }) => {
  return (
    <Container className="mobile" isOpen={isOpen} onClick={setOpen}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default Index;
