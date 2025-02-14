import './App.css';
import './Error.css';
import './responsive.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Applayout from "./component/Applayout";
import CountryDetails from './component/CountryDetails';
import {  createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createHashRouter(  
  createRoutesFromElements(
    <Route path='/' element={<Applayout/> } errorElement={<ErrorPage/>} >
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='country' element={<Country/>} />
      <Route path='/World-Info/country/:id' element={<CountryDetails/>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
