import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Error from "./pages/ErrorPage/Error";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ApartmentPage = lazy(() => import("./pages/ApartmentPage/ApartmentPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/apart/:apartId",
        element: <ApartmentPage />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
