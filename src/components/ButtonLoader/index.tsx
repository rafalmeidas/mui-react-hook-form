import { Button, ButtonProps, CircularProgress } from "@mui/material";

const ButtonLoader = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      startIcon={
        props.disabled ? <CircularProgress size={16} color="primary" /> : null
      }
      sx={{ padding: "0.5rem 3.5rem 0.5rem 3.5rem" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonLoader;
