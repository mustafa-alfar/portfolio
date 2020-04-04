import React from 'react';

import { Container } from './styled';
import { projects } from '../../utils';

const Index = () => {
  return (
    <Container className="max-width" id="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map((project, idx) => (
          <li key={idx}>
            <h2>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h2>
            <p>{project.description}</p>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener">
                <img src="/github.svg" alt="" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Index;
