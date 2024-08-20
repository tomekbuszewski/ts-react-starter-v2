import type { JSX, LazyExoticComponent } from "react";

import { lazy, Suspense } from "react";
import { Loading } from "@ui/atoms";

type ReactComponent = () => JSX.Element;

const GoodbyePage = lazy(() => import("./Goodbye/Goodbye"));

const lazyFactory = (
  Component: LazyExoticComponent<ReactComponent>,
  loading?: ReactComponent,
): ReactComponent => {
  const LoadingComponent = loading ?? Loading;

  // eslint-disable-next-line react/display-name
  return () => {
    return (
      <Suspense fallback={<LoadingComponent />}>
        <Component />
      </Suspense>
    );
  };
};

export const Goodbye = lazyFactory(GoodbyePage);
