import React from 'react';
import Introduction from '../components/Introduction';
import Team from '../components/Team';
import Aspiration from '../components/Aspiration';

function About() {
  return (
    <React.Fragment>
      <Introduction />
      <Team />
      <Aspiration />
    </React.Fragment>
  );
}

export default About;
