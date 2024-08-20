import { lazy } from "react";
import { lazyFactory } from "@utils";

const GoodbyePage = lazy(() => import("./Goodbye/Goodbye"));

export const Goodbye = lazyFactory(GoodbyePage);
