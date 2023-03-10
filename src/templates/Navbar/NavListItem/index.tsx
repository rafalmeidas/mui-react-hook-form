import { ListItemButton, ListItemText, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

type NavListItemProps = {
  route: string;
  name: string;
  onClick: () => void;
};

function NavListItem({ route, name, onClick }: NavListItemProps) {
  const navigate = useNavigate();

  return (
    <ListItem
      disablePadding
      onClick={() => {
        navigate(route);
        onClick();
      }}
    >
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default NavListItem;
