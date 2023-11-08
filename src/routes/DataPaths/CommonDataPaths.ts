import { LazyExoticComponent } from "react";
import { CommonImports } from "../LazyImports/CommonImports";

type TRoutePath = {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
};

export const CommonDataPaths: TRoutePath[] = [
  {
    path: "/login",
    element: CommonImports.Login
  },
  {
    path: "/Home",
    element: CommonImports.Home
  },
  {
    path: "/",
    element: CommonImports.Home
  },
  {
    path: "/not-found",
    element: CommonImports.NotFound
  },
  {
    path: "*",
    element: CommonImports.NotFound
  },
  {
    path: "/not-autorization",
    element: CommonImports.NotAuth
  }
];
