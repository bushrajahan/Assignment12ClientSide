import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import { Root } from "postcss";
import ErrorPage from "./pages/ErrorPage";
import Banner from "./pages/Banner";
import Navbar from "./pages/Navbar";
import AllContest from "./pages/AllContest";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Root from "./pages/Root";
import PopularContest from "./pages/PopularContest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
         path:'/navbar',
         element:<Navbar></Navbar>
      },
      {
        path:'/banner',
        element:<Banner></Banner>
      },
      {
        path:'/allContest',
        element:<AllContest></AllContest>
      },
      {
         path:'/popular',
         element:<PopularContest></PopularContest>
      },
      {
        path:'/login',
        element:<Login></Login>
      }

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);