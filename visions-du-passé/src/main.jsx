import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import EpoqueRevolution from "./pages/EpoqueRevolution"
import EpoqueEgypte from "./pages/EpoqueEgypte"
import EpoqueActuelle from "./pages/EpoqueActuelle"
import EpoqueMoyenAge from "./pages/EpoqueMoyenAge"
import EpoqueRomain from "./pages/EpoqueRomain"
import App from './App.jsx'

import './index.css'

const getData = (url) => (
  fetch(url).then(result => result.json()).then(data => data)
)

const router = createBrowserRouter([
 {
   path: "/",
   element: <App />,
   children: [
     {
       path: "/",
       element: <Home />,
     },
     {
       path: "/about",
       element: <About /> ,
     },
    {
      path: "/epoqueRevolution",
      element: <EpoqueRevolution />,
    },
    {
      path: "/epoqueEgypte",
      element: <EpoqueEgypte />,
    },
    {
      path: "/epoqueActuelle",
      element: <EpoqueActuelle />,
    },
    {
      path: "/epoqueMoyenAge",
      element: <EpoqueMoyenAge />,
    },
    {
      path: "/epoqueRomain",
      element: <EpoqueRomain />,
    },
    //  {
    //    path: "/cupcakes",
    //    element: <CupcakeList />,
    //    loader: () => (
    //      getData('http://localhost:3310/api/cupcakes')
    //    )
       // Step 1: load data here
    //  },
    //  {
    //    path: "/cupcakes/:id",
    //    element: <CupcakeDetails />,
    //    loader: ({params}) => getData(`http://localhost:3310/api/cupcakes/${params.id}`)
    //  },
   ],
 },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
