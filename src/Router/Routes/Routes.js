import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Home/Register/Register";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServicesDetails/ServiceDetails";

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
        
      ]
    },
  ]);
  export default router;