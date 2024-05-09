import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Routes/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import AuthProvider from './Provider/AuthProvider';
import Category from './Components/Routes/Category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Register />
      },
      // {
      //   path: '/category',
      //   element: <Category />,
      //   loader: ()=> fetch('data.json'),
      // }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />
    </AuthProvider>


  </React.StrictMode>,
)
