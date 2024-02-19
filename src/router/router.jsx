import {createBrowserRouter} from "react-router-dom";
import Layout from "../compomemts/Layout/index.js";
import HomePage from "../pages/HomePage/index.js";
import People from "../pages/People/index.js";
import Planets from "../pages/Planets/index.js";
import Person from "../pages/Person/index.js";
import Planet from "../pages/Planet/index.js";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/people",
        element: <People />
      },
      {
        path: "/people/:id",
        element: <Person />
      },
      {
        path: "/planets",
        element: <Planets />
      },
      {
        path: "/planets/:id",
        element: <Planet />
      },

    ]
  }


]);