import React from "react";
import { Container, Typography, CircularProgress, Alert } from "@mui/material";
import useStockManager from "../hooks/useStockManager";
import StockManager from "../components/StockManager";

const StockManagerPage = () => {
  const { stocks, loading, error, addStock, editStock, removeStock } =
    useStockManager();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Stock Management
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error.message}</Alert>}
      {!loading && !error && (
        <StockManager
          stocks={stocks}
          addStock={addStock}
          editStock={editStock}
          removeStock={removeStock}
        />
      )}
    </Container>
  );
};

export default StockManagerPage;
