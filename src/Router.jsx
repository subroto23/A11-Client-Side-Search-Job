import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Root from "./Components/Root/Root";
import AllJobs from "./Components/AllJobs/AllJobs";
import Home from "./Pages/Home";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import Blogs from "./Components/Blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
