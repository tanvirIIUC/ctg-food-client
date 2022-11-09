import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allservice from "../../Pages/AllServices/Allservice";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Home/Register/Register";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceDetails from "../../Pages/ServicesDetails/ServiceDetails";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allservice',
            element:<Allservice></Allservice>
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
            path:'/servicedetails/:id',
            element:<ServiceDetails></ServiceDetails>,
           loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`) 
        },
        {
            path:'/myReview',
            element:<MyReview></MyReview>,
           
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>,
           
        },
        
      ]
    },
  ]);
  export default router;