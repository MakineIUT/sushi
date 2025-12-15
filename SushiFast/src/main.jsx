import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Acceuil from './Pages/Acceuil.jsx';
import Menus from './Pages/menus.jsx';
import View_menu from './Pages/View_menu.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Acceuil />,
      },  
      { 
        path: '/menus',
        element: <Menus />,
      }, 
      {
        path: '/view_menu/:id',
        element: <View_menu />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
