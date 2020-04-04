import React from 'react';

import { Container } from './styled';

const Index = () => {
  return (
    <Container className="max-width" id="about">
      <h1>Hi Again!</h1>
      <h2>
        I have two years of experience with the Front-end programming,
        especially React and its ecosystem, have been tried to deliver a a
        high-quality product which is capable of achieving the business's goals.
      </h2>
      <a className="call-for-action" href="#contact">
        Contact me
      </a>
    </Container>
  );
};

export default Index;
