import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import BecomeParent from '@/pages/BecomeParent';
import BecomeSurrogate from '@/pages/BecomeSurrogate';
import About from '@/pages/About';
import News from '@/pages/News';
import Program from '@/pages/Program';
import Career from '@/pages/Career';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'become-parent',
        element: <BecomeParent />,
      },
      {
        path: 'become-surrogate',
        element: <BecomeSurrogate />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'program',
        element: <Program />,
      },
      {
        path: 'career',
        element: <Career />,
      },
    ],
  },
]);

export default router; 