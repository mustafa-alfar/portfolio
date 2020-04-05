import React from 'react';
import { Link } from 'react-scroll';

const Index = () => {
  return (
    <>
      <li>
        <Link
          className="basic-link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className="basic-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="basic-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-180}
          duration={500}
        >
          Contact Me
        </Link>
      </li>
    </>
  );
};

export default Index;
