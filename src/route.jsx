import { createBrowserRouter } from "react-router-dom";
import { Add, Cards, Erorr, Home, Service } from "./pages";
import { Login } from "./components";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Home/>
    },

    {
        path: '/add',
        element: <Add/>
    },

    {
        path: '/cards',
        element: <Cards/>
    },

    {
        path: '/service',
        element: <Service/>
    },

    {
        path: '/login',
        element: <Login/>
    },

    {
        path: '*',
        element: <Erorr/>
    }
])