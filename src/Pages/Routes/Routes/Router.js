import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import CarItems from "../../CarItems/CarItems";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AddProduct from "../../Dashboard/AllSellers/AddProduct/AddProduct";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import MyProduct from "../../Dashboard/AllSellers/MyProduct/MyProduct";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import ErrorPage from "../../ErrorPage/ErrorPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Home from "../../Shared/Home/Home/Home";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/category/:id',
            loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
            element:<PrivateRoute><CarItems></CarItems></PrivateRoute>
        },
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      errorElement : <ErrorPage></ErrorPage>,
      children:[
        {
          path:'/dashboard',
          element:<MyOrders></MyOrders> // eita buyer er kaj
        },
        {
          path:'/dashboard/users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute> // eita admin er kaj
        },
        {
          path:'/dashboard/sellers',
          element:<AdminRoute><AllSellers></AllSellers></AdminRoute> // eita admin er kaj
        },
        {
          path:'/dashboard/buyers',
          element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute> // eita admin er kaj
        },
        {
          path:'/dashboard/addproduct',
          element:<AddProduct></AddProduct> // eita seller er kaj 
        },
        {
          path:'/dashboard/myproduct',
          element:<MyProduct></MyProduct> // eitao seller er kaj
        },
      ]
    }
  ]);
  export default router;