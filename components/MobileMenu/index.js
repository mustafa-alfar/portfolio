import React from 'react';

import { Container, Menu } from './styled';
import BasicLinks from '../BasicLinks';

const Index = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Menu>
        <BasicLinks />
      </Menu>
    </Container>
  );
};

export default Index;
