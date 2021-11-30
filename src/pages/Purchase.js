import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Purchase = () => (
  <Main
    title="Purchase"
    description="Purchase our product"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/purchase">Purchase</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>To make a purchase, inititate your payment and you will be prompted for details:</p>
        <p>Note: Each box lasts for one week [21 packets, (3 meals a day for 7 days a week)]</p>
        <img src={`${PUBLIC_URL}/images/pay.jpeg`} alt="" width="300" height="300" object-fit="cover" />
      </div>
    </article>
  </Main>
);

export default Purchase;
