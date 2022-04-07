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
        <img src={`${PUBLIC_URL}/images/product.jpeg`} alt="" width="100%" height="100%" object-fit="cover" />
        <br />
        <br />
        <p>UPI-ID: healthindiawellbeing-1@okhdfcbank / GPay: +91 77604 77604</p>
        <img src={`${PUBLIC_URL}/images/pay.jpeg`} alt="" width="300" height="300" object-fit="cover" />
        <br />
        <strong>Each box contains 3X7 packets (for the entire week) and costs Rs.990. </strong>
        <br />
        <strong>Intiate your payment to be prompted for details on your UPI App. </strong>
        <br />
        <strong>Additional shipment charges may apply. </strong>
        <br />
        <strong>Contact +91 77604 77604 in case of queries. </strong>
        <br />
        <strong>Note: The product is to be stored in the refrigerator.</strong>
      </div>
    </article>
  </Main>
);

export default Purchase;
