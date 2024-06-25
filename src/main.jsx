import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './errorPage';
import Root from './routes/root';
import Login from './pages/login';
import SignupForm from './components/signupForm';
import Success from './pages/success';
import Logout from './pages/logout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SignupForm/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/success",
        element: <Success/>,
      },
      {
        path: "/logout",
        element: <Logout/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
