import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import LogIn from "../Pages/AuthenticationPages/LogIn";
import Registration from "../Pages/AuthenticationPages/Registration";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<LogIn></LogIn>
            },
            {
                path:'register',
                element:<Registration></Registration>
            }
        ]
    }
])
export default router