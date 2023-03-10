import { KeyboardEvent, MouseEvent, useState } from "react";
import {
  IconButton,
  Container,
  Toolbar,
  AppBar,
  Drawer,
  List,
  Box,
} from "@mui/material";
import { FaBars } from "react-icons/fa";

import useMatch from "../../hooks/useMatch";
import NavListItem from "./NavListItem";
import NavItem from "./NavItem";

import routes from "../../routes";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const match = useMatch();

  const { defaultRoute } = routes;

  const toggleDrawer =
    (openDrawer: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(openDrawer);
    };

  return (
    <AppBar position="sticky">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: match ? 1 : 0, display: { xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-app-bar"
              aria-haspopup="true"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <FaBars />
            </IconButton>
            <Drawer
              color="primary"
              anchor="left"
              open={open}
              onClose={toggleDrawer(false)}
            >
              <Box sx={{ width: 250 }}>
                <List component="nav">
                  <NavListItem
                    name="Home"
                    route={defaultRoute}
                    onClick={() => setOpen(false)}
                  />
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavItem name="Home" route={defaultRoute} />
            <NavItem name="Get started" route={defaultRoute} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
