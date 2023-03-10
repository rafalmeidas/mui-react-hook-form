import { MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type NavItemProps = {
  name: string;
  route: string;
};

const NavItem = ({ name, route }: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <MenuItem onClick={() => navigate(route)}>
      <Typography textAlign="center">{name}</Typography>
    </MenuItem>
  );
};

export default NavItem;
