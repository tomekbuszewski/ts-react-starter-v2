import type { JSX, LazyExoticComponent } from "react";

import { Suspense } from "react";
import { Loading } from "@ui/atoms";

type ReactComponent = () => JSX.Element;
const lazyFactory = (
  Component: LazyExoticComponent<ReactComponent>,
  loading?: JSX.Element,
): ReactComponent => {
  const LoadingComponent = loading ?? <Loading />;

  const LazyFactory = () => {
    return (
      <Suspense fallback={LoadingComponent}>
        <Component />
      </Suspense>
    );
  };

  return LazyFactory;
};
export default lazyFactory;
