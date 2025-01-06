import React, { useState, useEffect } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const LoadingSpinner = ({ initialMessage = "Loading, please wait..." }) => {
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage(
        "This is taking longer because the server might be starting up. Please wait a moment."
      );
    }, 5000); // Update message after 5 seconds

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <CircularProgress />
      <Typography variant="body1" sx={{ marginTop: 2, color: "gray" }}>
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
