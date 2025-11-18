import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useStateContext } from "../contexts/ContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DefaultLayout() {
  const { userToken } = useStateContext();

  if (!userToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default DefaultLayout;
