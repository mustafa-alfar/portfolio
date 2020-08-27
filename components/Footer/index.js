import React from 'react';
import Link from 'next/link';

import { Container, Layout } from './styled';

const contactList = [
  {
    href: 'https://github.com/mustafa-alfar',
    name: 'Github',
    icon: '/github.svg',
  },
  {
    href: 'https://stackoverflow.com/users/10185088/mustafa-alfar',
    name: 'StackOverflow',
    icon: '/stack-overflow.svg',
  },

  {
    href: 'https://www.linkedin.com/in/mustafa-alfar-503a3b1a0/',
    name: 'LinkedIn',
    icon: '/linkedin.svg',
  },

  {
    href: 'https://twitter.com/mustafa_alfar',
    name: 'Twitter',
    icon: '/twitter.svg',
  },
];

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
          {contactList.map((social) => (
            <li key={social.name}>
              <a href={social.href} target="_blank" rel="noopener">
                <img src={social.icon} alt={social.name} />
              </a>
            </li>
          ))}
        </ul>
      </Layout>
    </Container>
  );
};

export default Index;
