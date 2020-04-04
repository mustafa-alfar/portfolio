import React from 'react';
import Link from 'next/link';

import { Container, Layout } from './styled';

const Index = () => {
  return (
    <Container>
      <Layout className="max-width">
        <div>
          <h1>
            <Link href="/">
              <a>Mustafa Alfar</a>
            </Link>
          </h1>
          <p>
            © All rights are reserved | {new Date().getFullYear()} | Made with
            ❤️ by Mustafa Alfar
          </p>
        </div>
        <ul>
          <li>
            <a
              href="https://github.com/mustafa-alfar"
              target="_blank"
              rel="noopener"
            >
              <img src="/github.svg" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/10185088/mustafa-alfar"
              target="_blank"
              rel="noopener"
            >
              <img src="/stack-overflow.svg" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/mustafa_alfar"
              target="_blank"
              rel="noopener"
            >
              <img src="/twitter.svg" alt="" />
            </a>
          </li>
        </ul>
      </Layout>
    </Container>
  );
};

export default Index;
