import React from 'react';

import { Container } from './styled';

const Index = () => {
  return (
    <Container className="max-width">
      <h1>Hi There!</h1>
      <h2>I am Mustafa and I am a Front-end engineer</h2>
      <a className="call-for-action" href="#contact">
        Contact me
      </a>
    </Container>
  );
};

export default Index;
