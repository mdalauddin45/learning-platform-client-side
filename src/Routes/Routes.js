import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/FAQ/Faq";
import Login from "../components/Login/Login";
import Category from "../components/Pages/Category/Category";
import CheckOut from "../components/Pages/CheckOut/CheckOut";
import Courses from "../components/Pages/Courses/Courses";
import Home from "../components/Pages/Home/Home";
import Profile from "../components/Pages/Profile/Profile";
import Register from "../components/Register/Register";

import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://server-site-eight.vercel.app/courses`),
      },
      {
        path: "/courses",
        element: <Home></Home>,
        loader: () => fetch(`https://server-site-eight.vercel.app/courses`),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://server-site-eight.vercel.app/category/${params.id}`),
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-site-eight.vercel.app/courses/${params.id}`),
      },

      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/profile", element: <Profile></Profile> },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-site-eight.vercel.app/courses/${params.id}`),
      },
    ],
  },
]);
