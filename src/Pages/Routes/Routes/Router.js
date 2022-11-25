import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Home from "../../Shared/Home/Home/Home";
import SignUp from "../../SignUp/SignUp";

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
      ]
    },
  ]);
  export default router;