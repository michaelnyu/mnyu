import React, { Suspense } from 'react';

export const GenericSuspenceLoad = Component => props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);
