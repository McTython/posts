import { Main } from "@/pages";
import { NotFound } from "@/pages";
import { IRouteItem } from "./interfaces/IRouteItem";

export enum ERoute {
  Main = "/",
  NotFound = "*",
}

export const routes: IRouteItem[] = [
  {
    path: ERoute.Main,
    element: <Main />,
  },
  {
    path: ERoute.NotFound,
    element: <NotFound />,
  },
];
