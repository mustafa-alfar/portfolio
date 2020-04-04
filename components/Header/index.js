import React from 'react';
import Link from 'next/link';

import { Container } from './styled';
import Burger from '../Burger';
import BasicLinks from '../BasicLinks';

const Index = React.forwardRef(
  ({ isFixed, isOpen, setOpen, showFixedHeader }, ref) => {
    return (
      <Container
        className={`max-width ${showFixedHeader ? 'appear' : ''}`}
        isFixed={isFixed}
        ref={ref}
      >
        <h1>
          <Link href="/">
            <a>Mustafa Alfar</a>
          </Link>
        </h1>
        <nav className="desktop">
          <BasicLinks />
        </nav>
        <Burger isOpen={isOpen} setOpen={setOpen} />
      </Container>
    );
  }
);

export default Index;
