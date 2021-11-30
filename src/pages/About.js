import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const About = () => (
  <Main
    title="About"
    description="Learn about Health India"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">The Product</Link></h2>
        </div>
      </header>
      <h2>Why choose our product?</h2>
      <p align="justify">
        With a healthy blend of proteins, carbohydrates, unsaturated fats, in addition to
        few of the most essential vitamins and minerals, we ensure you that our “7 day
        miracle, in a box” is fully capable of providing you with the advanced nutritional
        support your body needs. You’re free to prepare your meals according to your own
        discretion and taste
        because the simple inclusion of our product into your diet will work the wonders its
        meant to work, regardless of how you choose to consume it. Consistency is
        definitely important since the impact food has on your body, although direct, is also
        gradual. But again, you’re fully free to choose to consume our products week after
        week, or through alternate weeks, or follow any such other patterns to suit your
        nutrient requirements. So, get right to it.
      </p>
      <h2>What&apos;s in the box?</h2>
      <p align="justify">
        The box comes with packets containing the food items you need to attain/maintain optimal
        health, because it enables your body to greatly support vital functions, growth,
        development and a fulfilling metabolism. It could potentially change your health
        profile, for the better, should you be diabetic, or suffering from liver problems, high
        cholesterol levels, or if you have weight management issues due to thyroid, PCOS,
        and other such conditions.
        Our key ingredients, i.e., broken wheat, brown rice, ragi,
        sorghum (jowar) and bajra, combined with a set of few other fully organic,
        “miracle” elements can work an absolute wonder on your body. We provide you
        with all the staples you need, in the form of 3 meals a day for 7 days a week,
        to keep you going for a whole week by helping you contribute to the bigger picture;
        the good health you need, to keep you going for a lifetime.
      </p>
    </article>
  </Main>
);

export default About;
