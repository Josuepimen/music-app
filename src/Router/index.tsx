
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ForgotPassword from '../Pages/Forgot-Password';
import ResetPassword from '../Pages/Reset-Password';
import HomePage from '../Pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
{
    path: '/Home',
    element: <HomePage />,
  },

]);
