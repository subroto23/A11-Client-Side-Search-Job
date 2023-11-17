import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Root from "./Components/Root/Root";
import AllJobs from "./Components/AllJobs/AllJobs";
import Home from "./Pages/Home";
import SignUp from "./Components/SignUp/SignUp";
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
        path: "/all-jobs",
        element: <AllJobs />,
      },
    ],
  },
]);

export default router;
