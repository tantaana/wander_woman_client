import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Homepage from "../../Pages/Homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
