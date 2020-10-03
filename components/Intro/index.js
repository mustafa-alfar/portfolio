import React from 'react';
import { Link } from 'react-scroll';

import { Container } from './styled';

const Index = () => {
  return (
    <Container className="max-width" big>
      <h1>Hi There!</h1>
      <h2>I am Mustafa and I am a Front-end engineer</h2>
      <Link
        className="call-for-action"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >
        Contact Mustafa
      </Link>
    </Container>
  );
};

export default Index;
