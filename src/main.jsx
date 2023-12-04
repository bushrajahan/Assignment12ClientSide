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
import AuthProvider from "./AuthProvider";
import Register from "./pages/Register";
import MyCart from "./pages/Dashboard/MyCart";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from "./pages/Dashboard";
import AllUSers from "./pages/Dashboard/AllUSers";
import ManageContest from "./Components/Admin/ManageContest";
import MyCreated from "./Components/Creator/MyCreated";
import MyContestShow from "./Components/Creator/MyContestShow";
import Details from "./Components/Details/Details";
import Payment from "./pages/Payment/Payment";
import ContestSubmitted from "./Components/Creator/ContestSubmitted";
import Update from "./Components/Creator/Update";

// Create a client
const queryClient = new QueryClient()

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
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
         path:'/details/:id',
         element:<Details></Details>
      },
     {
       path:'/payment/:id',
       element:<Payment></Payment>
     },
 
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'/dashboard/cart',
            element:<MyCart></MyCart>
          },
          //admin dashboard
          {
            path:'/dashboard/allusers',
            element:<AllUSers></AllUSers>
          },
          {
            path:'/dashboard/bookings',
            element:<ManageContest></ManageContest>
          },
          {
            path:'/dashboard/mycreated',
            element:<MyCreated></MyCreated>
          },
          {
            path:'/dashboard/mycontest',
            element:<MyContestShow></MyContestShow>
          },
          {
            path:'/dashboard/submit',
            element:<ContestSubmitted></ContestSubmitted>
          },
          {
            path:'/dashboard/update/:id',
            element:<Update></Update>
          }
        ]
      }

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className=" mx-auto">
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
    </QueryClientProvider>

  </div>
);