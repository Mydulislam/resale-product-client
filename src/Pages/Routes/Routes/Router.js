import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import CarItems from "../../CarItems/CarItems";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AddProduct from "../../Dashboard/AllSellers/AddProduct/AddProduct";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import MyProduct from "../../Dashboard/AllSellers/MyProduct/MyProduct";
import MyBuyers from "../../Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import MyPayment from "../../Dashboard/MyOrders/MyPayment";
import ErrorPage from "../../ErrorPage/ErrorPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Home from "../../Shared/Home/Home/Home";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
          path:'/dashboard/orders',
          element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute> // eita buyer er kaj
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
          element:<SellerRoute><AddProduct></AddProduct></SellerRoute> // eita seller er kaj 
        },
        {
          path:'/dashboard/myproduct',
          element:<SellerRoute><MyProduct></MyProduct></SellerRoute> // eitao seller er kaj
        },
        {
          path:'/dashboard/mybuyers',
          element:<SellerRoute><MyBuyers></MyBuyers></SellerRoute> // eitao seller er kaj
        },
        {
          path:'/dashboard/payment/:id',
          loader:({params})=> fetch(`http://localhost:5000/payment/${params.id}`),
          element:<BuyerRoute><MyPayment></MyPayment></BuyerRoute>
      }
      ]
    }
  ]);
  export default router;