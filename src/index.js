import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ThemeProvider , createTheme }  from '@mui/material/styles';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from "./components/Footer";
import Home from "./pages/home/home";
import Details from "./pages/details/Details";

const theme = createTheme({
  palette: {
    primary: {
      main: '#50F127'
    },
    secondary: {
      main: '#FFF'
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/details",
    element: <Details/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <RouterProvider router={router} />
      <Footer></Footer>
    </ThemeProvider>
  </React.StrictMode>
);