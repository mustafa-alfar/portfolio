import React from 'react';
import { Link } from 'react-scroll';

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
      <Link
        className="call-for-action"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >
        Contact Me
      </Link>
    </Container>
  );
};

export default Index;
