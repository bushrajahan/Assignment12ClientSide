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
import MyParticiping from "./Components/User/MyParticiping";
import MyWinning from "./Components/User/MyWinnig";
import { Profiler } from "react";
import MyProfile from "./Components/User/MyProfile";
import Privateroute from "./PrivateRoute";
import Card from "./Components/Card";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import { DataShow } from "./pages/DataShow";
import WinnersList from "./Components/ALLwinner/ALLwinner";
import PaymrntHistory from "./pages/paymrntHistory/PaymrntHistory";

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
        path:'/datashow',
        element:<DataShow></DataShow>
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
        path:'/card',
        element:<Card></Card>
      },
      {
        path:'/leaderboard',
        element:<LeaderBoard></LeaderBoard>
      },
      {
         path:'/details/:id',
         element:<Privateroute><Details></Details></Privateroute>
      },
     {
       path:'/payment/:id',
       element:<Payment></Payment>
     },
     {
      path:'/winner',
      element:<WinnersList></WinnersList>
    },
    {
      path:'/pay',
      element:<PaymrntHistory></PaymrntHistory>
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
          },
          {
            path:'/dashboard/participate',
            element:<MyParticiping></MyParticiping>
          },
          {
            path:'/dashboard/myWinning',
            element:<MyWinning></MyWinning>
          },
          {
            path:'/dashboard/profile',
            element:<MyProfile></MyProfile>
          }
        ]
      }

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
 
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
    </QueryClientProvider>
 
  </div>
);