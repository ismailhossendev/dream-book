import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Accounts/Login/Login";
import Register from "../pages/Accounts/Register/Register";
import ByCategory from "../pages/ByCategory/ByCategory";
import Reports from "../pages/Dashboard/Admin/Reports";
import Users from "../pages/Dashboard/Admin/Users";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../pages/Dashboard/Products/AddProduct";
import MyProducts from "../pages/Dashboard/Products/MyProducts";
import Home from "../pages/Home/Home";
import UserDashboard from "../pages/Dashboard/Dashboard/UserDashboard";
import MyOrders from "../pages/Dashboard/Products/MyOrders";
import LoginRoute from "./LoginRoute";
import BuyerRoute from "./BuyerRoute";
import SellerRoute from "./SellerRoute";
import AdminRoute from "./AdminRoute";

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
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://dream-book-server.vercel.app/category/${params.id}`),
                element: <LoginRoute> <ByCategory /></LoginRoute>
            }
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
                path: '/dashboard',
                element: <UserDashboard />
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute><MyProducts /></SellerRoute>
            },
            {
                path: '/dashboard/users',
                element: <Users />
            }
            ,
            {
                path: '/dashboard/add-product',
                element: <SellerRoute><AddProduct /></SellerRoute>
            },
            {
                path: '/dashboard/my-orders',
                element: <BuyerRoute><MyOrders /></BuyerRoute>
            }
        ])
    }
])