import { lazy } from "react";

const CommonImports = {
  Home: lazy(() => import("@pages/Home/Home")),
  Login: lazy(() => import("@pages/Login/Login")),
  NotFound: lazy(() => import("@pages/NotFound/NotFound")),
  NotAuth: lazy(() => import("@pages/NotAuth/NotAth")),
};

export { CommonImports };