import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Root from "./Components/Root/Root";
import AllJobs from "./Components/AllJobs/AllJobs";
import Home from "./Pages/Home";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import Blogs from "./Components/Blogs/Blogs";
import BlogsDetails from "./Components/BlogsDetails/BlogsDetails";
import AddJobs from "./Components/AddJobs/AddJobs";
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
        path: "/add-jobs",
        element: <AddJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs-details/:id",
        element: <BlogsDetails />,
        loader: ({ params }) =>
          fetch(`https://api.npoint.io/0749a376c646416dd7f8/${params.id}`),
      },
    ],
  },
]);

export default router;
