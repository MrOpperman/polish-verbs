import React from 'react';
import { Helmet } from 'react-helmet';

// svgs

const NotFound = () => (
  <div>
    <Helmet title='404 Not Found' />
    <h1>This is not the route you&apos;re looking for.</h1>
    <p>This is not the route I&apos;m looking for...</p>
  </div>
);

export default NotFound;
