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
import ViewDetailsJob from "./Components/ViewDetails/ViewDetailsJob";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CvSubmitedForm from "./Components/CvSubmit/CvSubmitedForm";
import MyPostedJobs from "./Components/MyJobs/MyPostedJobs";
import UpdateJob from "./Components/MyJobUpdate/MyJobUpdate";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
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
        path: "/my-jobs/post",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/apply/job",
        element: (
          <PrivateRoute>
            <AppliedJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-jobs/post/update/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3001/api/my-jobs/job/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <ViewDetailsJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3001/jobs/job/${params.id}`),
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
      {
        path: "/submit-cv",
        element: (
          <PrivateRoute>
            <CvSubmitedForm />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
