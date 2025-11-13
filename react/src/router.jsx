import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Jobs from "./views/Jobs";
import AddJob from "./views/AddJob";
import Login from "./views/Login";
import Signup from "./views/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/add-job",
    element: <AddJob />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
]);

export default router;
