import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
// import ContactIcons from '../components/Contact/ContactIcons';

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
        <p>Feel free to get in touch. You can reach out to us at: healthindiawellbeing@gmail.com</p>
        <p>Alternatively, you can contact us on: +91 9741384590</p>
        {/* <EmailLink /> */}
      </div>
      {/* <ContactIcons /> */}
    </article>
  </Main>
);

export default Contact;
