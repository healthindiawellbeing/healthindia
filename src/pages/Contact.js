import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Mailer from './Mailer';

const Contact = () => (
  <Main
    title="Contact Us"
    description="Contact Health India via email @ healthindia@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact Us</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch.</p>
        <p>You can reach out to us at healthindiawellbeing@gmail.com or on +91 9741384590</p>
        <Mailer />
      </div>
    </article>
  </Main>
);

export default Contact;
