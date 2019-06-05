import React, { Suspense, lazy } from "react";

const AppRoot = lazy(() => import("./pages/AppRoot"));

export default () => (
  <Suspense
    fallback={
      <div className="loader-wrapper">
        <div class="loader" />
      </div>
    }
  >
    <AppRoot />
  </Suspense>
);
