import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import CarItems from "../../CarItems/CarItems";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Home from "../../Shared/Home/Home/Home";
import SignUp from "../../SignUp/SignUp";
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
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
  ]);
  export default router;