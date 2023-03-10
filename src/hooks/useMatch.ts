import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

const useMatch = (key: number | Breakpoint = "md") => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down(key));

  return match;
};

export default useMatch;
