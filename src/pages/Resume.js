import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Experience from '../components/Resume/Experience';

const Resume = () => (
  <Main
    title="Ingredients"
    description="Health India - Primary ingredients"
  >
    <article className="post" id="ingredients">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="ingredients">Primary Ingredients</Link></h2>
        </div>
      </header>
      <Experience />

    </article>
  </Main>
);

export default Resume;
