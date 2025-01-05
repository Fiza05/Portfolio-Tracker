import React from "react";
import { Typography, Box } from "@mui/material";

const ErrorDisplay = ({ message }) => (
  <Box mt={2}>
    <Typography color="error" variant="body1">
      {message}
    </Typography>
  </Box>
);

export default ErrorDisplay;
