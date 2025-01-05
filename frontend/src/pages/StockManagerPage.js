import React from "react";
import { Container, Typography, CircularProgress, Alert } from "@mui/material";
import StockManager from "../components/StockManager";

const StockManagerPage = ({
  stocks,
  loading,
  error,
  addStock,
  editStock,
  removeStock,
}) => {
  return (
    <Container>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error.message}</Alert>}
      {!loading && !error && (
        <StockManager
          stocks={stocks}
          addStock={addStock}
          editStock={editStock}
          removeStock={removeStock}
          error={error}
          loading={loading}
        />
      )}
    </Container>
  );
};

export default StockManagerPage;
