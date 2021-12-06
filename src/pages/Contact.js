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
        <div className="titlee">
          <h2 data-testid="heading"><Link to="/contact">Contact Us</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch.</p>
        <strong>You can reach out to us at healthindiawellbeing@gmail.com, </strong>
        <strong>and we&apos;ll get back to you within 24 hours.</strong>
        <p> . </p>
        <Mailer />
      </div>
    </article>
  </Main>
);

export default Contact;
