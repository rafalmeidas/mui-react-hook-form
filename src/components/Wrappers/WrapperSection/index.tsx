import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

type WrapperSectionProps = {
  title: string;
  children: ReactNode;
};

const WrapperSection = ({ title, children }: WrapperSectionProps) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default WrapperSection;
