import { Main } from "@/pages";
import { Posts } from "@/pages";
import { NotFound } from "@/pages";
import { IRouteItem } from "./interfaces/IRouteItem";

export enum ERoute {
  Main = "/",
  Posts = "/posts",
  NotFound = "*",
}

export const routes: IRouteItem[] = [
  {
    path: ERoute.Main,
    element: <Main />,
  },
  {
    path: ERoute.Posts,
    element: <Posts />,
  },
  {
    path: ERoute.NotFound,
    element: <NotFound />,
  },
];
