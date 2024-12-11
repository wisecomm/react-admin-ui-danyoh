import * as React from 'react';
import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Users from './pages/users/Users';
import Products from './pages/Products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';

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
    }
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}
