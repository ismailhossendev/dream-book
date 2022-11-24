import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Accounts/Login/Login";
import Register from "../pages/Accounts/Register/Register";
import Reports from "../pages/Dashboard/Admin/Reports";
import Users from "../pages/Dashboard/Admin/Users";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../pages/Dashboard/Products/MyProducts";
import Home from "../pages/Home/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: ([
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ])
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: ([
            {
                path: '/dashboard/reports',
                element: <Reports />
            },
            {
                path: '/dashboard/categories',
                element: <MyProducts />
            },
            {
                path: '/dashboard/users',
                element: <Users />
            }
        ])
    }
])