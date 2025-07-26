import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Resume from '@routes/Resume';
import Portfolio from '@routes/Portfolio';
import Demos from '@routes/Demos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Backend from '@components/demos/backend/Backend';
import Member from '@src/components/demos/member/Member';
import ErrorPage from '@routes/ErrorPage';
import Entry from '@components/demos/Entry';
import PlayGround from '@routes/PlayGround';
import { productsLoader } from '@routes/loader';
import Shop from '@components/demos/shop/Shop';
import './i18n';
import { isMobileDevice } from '@utils/isMobileDevice';
import MobileBlocker from '@utils/MobileBlocker';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/playGround',
    element: <PlayGround />,
  },
  {
    path: '/demos',
    element: <Demos />,
    children: [
      {
        path: '/demos/entry',
        element: <Entry />,
      },
      {
        path: '/demos/backend',
        element: <Backend />,
      },
      {
        path: '/demos/member',
        element: <Member />,
      },
      {
        path: '/demos/shop',
        element: <Shop />,
        loader: productsLoader,
        hydrateFallbackElement: <></>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isMobileDevice() ? <MobileBlocker /> : <RouterProvider router={router} />}
  </StrictMode>
);
