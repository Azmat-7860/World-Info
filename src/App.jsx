import './App.css';
import './Error.css';
import './responsive.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Applayout from "./component/Applayout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const router = createBrowserRouter([
  {
    path: '/World-Info/',  
    element: <Applayout />,
    errorElement : <ErrorPage/>,
        children: [
      { path: '', element: <Home /> },  
      { path: 'about', element: <About /> },  
      { path: 'contact', element: <Contact /> },
      { path: 'country', element: <Country /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
