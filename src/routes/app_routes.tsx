import { createBrowserRouter, Navigate } from "react-router-dom";

/*====================================================================================================
*                               Components Imports.
* ===================================================================================================*/
import ErrorPageView from "../views/ErrorPage_View";
import HomeView from "../views/Home_View";


const router = createBrowserRouter([

    /*==== Dashboard ====*/
    { path: "/", element: <Navigate to="/home" />, errorElement: <ErrorPageView /> },
    { path: "/home", element: <HomeView /> },
]);

export default router;