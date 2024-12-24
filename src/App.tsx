import * as React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import './styles/global.scss';
import LoginSignup from './pages/login/LoginSignup';
import LoginPage from './pages/login/LoginPage';

export default function App() {
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/loginsignup",
      element: <LoginSignup />,
    },
    {
      path: "/loginpage",
      element: <LoginPage />,
    },

  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}
