import React, { Suspense, lazy } from 'react';

const Verb = lazy(() => import('./verb'));

const LazyVerb = props => (
  <Suspense fallback={<p>loading</p>}>
    <Verb {...props} />
  </Suspense>
);

export default LazyVerb;
