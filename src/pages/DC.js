import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Dc = () => (
  <Main
    title="Diet Chart"
    description="Diet Chart for Health India"
  >
    <article className="post" id="dietchart">
      <header>
        <div className="titlee">
          <h2 data-testid="heading"><Link to="/dietchart">Diet Chart</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Click on the link below to view/download our prescribed diet chart.</p>
        <a href="https://drive.google.com/file/d/17f1_0tuTvVdBH3AHqsS9LKSci2xzvUPh/view?usp=sharing">Diet Chart</a>
      </div>
    </article>
  </Main>
);

export default Dc;
