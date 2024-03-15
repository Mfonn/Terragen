import { createBrowserRouter, Navigate } from "react-router-dom";

/*====================================================================================================
*                               Components Imports.
* ===================================================================================================*/
import ErrorPageView from "../views/ErrorPage_View";
import HomeView from "../views/Home_View";
import OrderView from "../views/Order_View";
import ProductDetailsView from "../views/ProductDetails_View";


const router = createBrowserRouter([

    /*==== Dashboard ====*/
    { path: "/", element: <Navigate to="/home" />, errorElement: <ErrorPageView /> },
    { path: "/home", element: <HomeView /> },

    /*==== Product Details ====*/
    { path: "/product_details", element: <ProductDetailsView /> },

    /*==== Order ====*/
    { path: "/order", element: <OrderView /> },
]);

export default router;