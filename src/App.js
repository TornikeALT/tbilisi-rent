import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import Models from './pages/Models';
import FeedBack from './pages/FeedBack';
import Contact from './pages/Contact';
import Team from './pages/Team';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/models',
        element: <Models />,
      },
      {
        path: '/feedback',
        element: <FeedBack />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
