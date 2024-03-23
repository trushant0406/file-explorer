import { RouteObject, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Base from "../layouts/Base";
import TypographyCard from "../component/Typography/Typography";

const routes = [
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: '/',
        element: <TypographyCard />
      },
      {
        path: "/*",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/about",
    element: <h1>Apout</h1>,
  },
] as RouteObject[];

const router = createBrowserRouter(routes);

export default router;
