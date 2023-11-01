import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: '*',
        element: <p>There's nothing here: 404!</p>,
      },
    ],
  },
]);


const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;