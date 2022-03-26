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
        <div className="titlee">
          <h2 data-testid="heading"><Link to="/purchase">Purchase</Link></h2>
        </div>
      </header>
      <div className="post">
        <p>Inititate your payment and you will be prompted for details on your UPI App.</p>
        <strong>Each box contains 3X7 packets (for the entire week) and costs Rs.990. </strong>
        <strong>The product is to be stored in the refrigerator.</strong>
        <br />
        <br />
        <img src={`${PUBLIC_URL}/images/pay.jpeg`} alt="" width="300" height="300" object-fit="cover" />
      </div>
    </article>
  </Main>
);

export default Purchase;
