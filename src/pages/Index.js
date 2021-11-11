import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Health India's commercial website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Health India</Link></h2>
          <p>
            ancient well-being
          </p>
        </div>
      </header>
      <p align="justify">
        A unique fraternity of well-being experts striving together,
        with the common goal of improving human health.
        We accomplish this by helping people take the organic route.
        Diet has a direct impact on human health,
        and we help fine-tune your diet to cater to the needs of your body.
        Diet plays a major role in controlling health issues such as
        Diabetes, Cholestrol, Liver problems,
        in addition to helping manage weight in case of PCOS and Thyroid problems.
        We cater to individuals suffering from such issues,
        in addition to helping the general population attain and maintain optimal health.
      </p>
    </article>
  </Main>
);

export default Index;
