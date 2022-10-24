import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Faq from "../components/FAQ/Faq";
import Login from "../components/Login/Login";
import Courses from "../components/Pages/Courses/Courses";
import Home from "../components/Pages/Home/Home";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/courses", element: <Courses></Courses> },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
