import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axiosClient from "../axios";

function DefaultLayout() {
  const { userToken, setCurrentUser } = useStateContext();

  useEffect(() => {
    if (!userToken) return;

    axiosClient.get("/profile/user").then(({ data }) => {
      setCurrentUser(data);
    });
  }, [userToken, setCurrentUser]);

  if (!userToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default DefaultLayout;
