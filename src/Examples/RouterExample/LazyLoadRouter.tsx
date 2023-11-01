import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Layout from './Layout';
const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const Contacts = React.lazy(() => import('./Pages/Contacts'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="home"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="contacts"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <Contacts />
              </React.Suspense>
            }
          />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;