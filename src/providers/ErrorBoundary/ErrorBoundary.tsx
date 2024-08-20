import type { ErrorInfo, FC } from "react";
import type { ErrorBoundaryPropsWithRender } from "react-error-boundary";

import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

function fallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <pre>{error.message}</pre>
      <hr />
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function onError(error: Error, info: ErrorInfo) {
  console.error(error, info);
}

const Provider = () => {
  /**
   * I had to hack this, because ErrorBoundary by default requires `fallback` prop
   */
  const Boundary = ErrorBoundary as unknown as FC<ErrorBoundaryPropsWithRender>;

  return (
    <Boundary fallbackRender={fallback} onError={onError}>
      <Outlet />
    </Boundary>
  );
};

export default Provider;
