import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../About/About";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Reviews from "../Reviews/Reviews";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "reviews",
          element: <Reviews></Reviews>,
          loader: () => fetch("Review.json"),
        },
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        { path: "about", element: <About></About> },
      ],
    },

    { path: "*", element: <ErrorPage></ErrorPage> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
