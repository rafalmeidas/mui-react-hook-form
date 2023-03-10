import { useLocation } from "react-router-dom";

const useNavbar = () => {
  const { pathname } = useLocation();

  const isNotRoutes =
    pathname !== "/login" &&
    pathname !== "/register" &&
    pathname !== "/forgot-password" &&
    !pathname.includes("recovery-password");

  return isNotRoutes;
};

export default useNavbar;
