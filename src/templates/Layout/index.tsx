import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import useNavbar from "../../hooks/useNavbar";
import useMatch from "../../hooks/useMatch";
import Navbar from "../Navbar";

const Layout = () => {
  const navbar = useNavbar();

  const match = useMatch();

  const padding = match ? 1 : 4;
  const paddingTop = !navbar ? 0 : 5;

  return (
    <>
      {navbar ? <Navbar /> : null}
      <Box
        component="main"
        sx={{ paddingTop, paddingLeft: padding, paddingRight: padding }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
